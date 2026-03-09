import { fetchNewsTrends } from "@/lib/queries";
import { Preferences } from "@capacitor/preferences";
import { ArrowBigRightDashIcon } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";

export default function NewsCard() {

    const newsScrollRef = useRef<any>(null);
    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
    const width = window.innerWidth;
    const [ news, setNews] = useState([]);
    
    // Load News 
    const loadNews = async () => {
       const { value: nw }:any = await Preferences.get({ key: 'news'});
       setNews(JSON.parse(nw));
    }

    // Cache News
    const cacheNews = async () => {
      const ns = await fetchNewsTrends();
      if(ns){
        const newsData = ns?.map((r: any) => ({
          id: r.id,
          title: r.title?.rendered || '',
          description: r.excerpt?.rendered || '',
          // image: r._embedded?.["wp:featuredmedia"]?.[0]?.source_url || '',
          image: r._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium?.source_url || '',
          date: r.date,
          content: r.content?.rendered || '',
          link: r.link
        })) || [];
        setNews(newsData);
        await Preferences.set({ key: 'news', value: JSON.stringify(newsData) });
      }
    }
    
    useLayoutEffect(() => {
      cacheNews();
      loadNews();
    }, []); 

   
    // Auto-scroll effect for news section
    useLayoutEffect(() => {
      if (!news || news?.length <= 1) return;
      const interval = setInterval(() => {
        setCurrentNewsIndex((prevIndex: number) => {
          const nextIndex = (prevIndex + 1) % news.length;
          // Scroll to the next news item
          if (newsScrollRef.current) {
            newsScrollRef.current.scrollTo({
              x: nextIndex * (width-24), // Full width minus padding and margins
              animated: true,
            });
          }
          return nextIndex;
        });
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }, [news]);

  return (
    <div className="flex flex-col space-y-3">
        <h2 className="text-lg font-medium">What's trending?</h2>
        <div className="" ref={newsScrollRef}>
        {/* <div className="flex"> */}
            { news?.map((row:any, i:number) => (
            <div key={i} id={`scroll-${i}`} className={`${i == currentNewsIndex ? 'flex': 'hidden'} relative w-full overflow-hidden`}>
                <div className="py-3 px-2 w-full space-y-4 flex flex-col justify-between ">
                    {/* <div className="h-40 w-full bg-gray-200 rounded-xl"></div> */}
                    <img src={row?.image} className="h-36 w-full bg-gray-200 rounded-xl object-cover object-top" />
                    <h2 className="text-base sm:text-lg font-medium tracking-wide capitalize line-clamp-2 leading-5" dangerouslySetInnerHTML={{ __html : row?.title?.toLowerCase() }}></h2>
                    <a href={row?.link} target="_blank" className="py-0.5 px-3 w-fit flex items-center space-x-2 align-left text-base text-[var(--theme-primary)] rounded-full border border-[var(--theme-primary)]"> 
                        <span className="font-medium">Read more</span>
                        <ArrowBigRightDashIcon size={24}/>
                    </a>
                </div>
                {/* Decorators */}
                <div className="absolute -bottom-14 -right-4 h-20 w-14 rotate-25 rounded-4xl bg-red-200/30"></div>
                <div className="absolute -bottom-10 -right-9 h-20 w-14 rotate-35 rounded-4xl bg-red-200/30"></div>
            </div>
            ))}

            { !news?.length && (
                <div className="relative w-full overflow-hidden">
                    <div className="py-3 px-2 w-full space-y-4 flex flex-col justify-between ">
                        <div className="h-40 w-full bg-gray-200 rounded-xl animate-pulse"></div>
                        <h2 className="text-base sm:text-lg font-medium tracking-wide blur-xs animate-pulse">Loading Article Content, Please wait ...</h2>
                        <div className="py-0.5 px-3 w-fit align-left rounded border border-[var(--theme-primary)] blur-xs animate-pulse"> Read more</div>
                    </div>
                    {/* Decorators */}
                    <div className="absolute -bottom-14 -right-4 h-20 w-14 rotate-25 rounded-4xl bg-red-200/30"></div>
                    <div className="absolute -bottom-10 -right-9 h-20 w-14 rotate-35 rounded-4xl bg-red-200/30"></div>
                </div>
            )}

        </div>
    </div>
  )
}
