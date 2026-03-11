import { Toast } from '@capacitor/toast';

const API_URL = import.meta.env.VITE_API_URL;

// const { value:dm }:any = await Preferences.get({ key: 'user' });
// const session:any = JSON.parse(dm);
// const token:string = session?.token;

// ### Authentication
export const login = async ({ username, password }: any) => {
    try {
       const resp = await fetch(`${API_URL}/api/auth/credential`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify({ username,password })
         });

         if(!resp.ok) {
            await Toast.show({ text: 'Invalid credentials' });
            return;
         }
         
         const data = await resp.json();
        //  if(data.success && data.data.user.group_id > 1){
                //await Toast.show({ text: 'Unauthorized user' });
        //      throw new Error('Unauthorized user');
        //  }

        //  return { user: data?.data?.user, token: data?.token, photo: data?.data?.photo };
         return { user: data?.data?.user, token: data?.token, photo: `https://portal.aucb.edu.gh/api/auth/photos?tag=${data?.data?.user?.tag}` };
        
    } catch (error) {
        console.log(error);
        // await Toast.show({ text: String(error) });
    }
}

// ### Home Queries
export const fetchAcademicStatus = async (session: any) => {
   try {
    const resp:any = await fetch(`${API_URL}/api/ais/students/${encodeURIComponent(session?.user?.tag)}`, {
    // const resp:any = await fetch(`${API_URL}/api/ais/academic-status/${encodeURIComponent('41329275')}`, {
        method: 'GET',
        headers: {
        "Content-Type": "application/json", 
          ... session?.token && ({ "x-access-token": session?.token })
        },
    });
    
    if(!resp.ok) {
        await Toast.show({ text: 'Failed to load data' });
        return;
    }

    const res = await resp.json();
    return res;
    
   } catch (error) {
      console.log(error)
   }
   
}

export const fetchNextClass = async (data: any) => {
    const resp = await fetch('http://localhost:5020');
    const user = await resp.json();
    return { user };
}

export const fetchNewsTrends = async () => {
    try {
        const resp = await fetch(`https://aucb.edu.gh/wp-json/wp/v2/posts?_embed`);
        if(!resp.ok){
          throw new Error("Failed to load news.");
        }
       
        const news = await resp.json();
        return news;

    } catch (error) {
       console.log(error);
       // await Toast.show({ text: String(error) });
    }
   
}

// ### Profile Queries
export const fetchProfile = async (session: any) => {
    try {
        const resp = await fetch(`${API_URL}/api/ais/students/${encodeURIComponent(session?.user?.tag)}`, {
        // const resp = await fetch(`${API_URL}/api/ais/students/${encodeURIComponent('41329275')}`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json", 
              ...session?.token && ({ "x-access-token": session?.token })
        }});

        if(!resp.ok){
            throw new Error("Failed to fetch profile.");
        }

        const profile = await resp.json();
        return { profile };
        
    } catch (error) {
        console.log(error)
    }
}

export const saveProfile = async (data: any, session: any) => {
    try {
        
        const resp:any = await fetch(`${API_URL}/api/ais/students/${encodeURIComponent(session?.user?.tag)}`, {
        // const resp:any = await fetch(`${API_URL}/api/ais/students/${encodeURIComponent('41329275')}`, {
            method: 'PATCH',
            headers: {
            "Content-Type": "application/json", 
            ... session?.token && ({ "x-access-token": session?.token })
            },
            body: JSON.stringify(data)
        });
        
        if(!resp.ok) {
           throw new Error('Invalid credentials');
        }

        const res = await resp.json();
        if(resp?.status == 200 ){
           await Toast.show({ text: 'Profile saved!' });
           return res;
        }

    } catch (error) {
        console.log(error);
        // await Toast.show({ text: String(error) });
    }
}

// ### Result Queries
export const fetchResults = async (session: any) => {
    try {
        const resp = await fetch(`${API_URL}/api/ais/students/${encodeURIComponent(session?.user?.tag)}/transcript`, {
        // const resp = await fetch(`${API_URL}/api/ais/students/${encodeURIComponent('41329275')}/transcript`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json", 
                ... session?.token && ({ "x-access-token": session?.token })
        }});
        
        if(!resp.ok) {
           throw new Error('Failed to load results');
        }

        const results = await resp.json();
        return { results };
    
    } catch (error) {
        console.log(error)
    }
    
}


// ### Fees & Transactions Queries
export const fetchFees = async (session: any) => {
    try {
        const resp = await fetch(`${API_URL}/api/ais/students/${encodeURIComponent(session?.user?.tag)}/finance`, {
        // const resp = await fetch(`${API_URL}/api/ais/students/${encodeURIComponent('41329275')}/finance`, {
            method: 'GET',
            headers: {
            "Content-Type": "application/json", 
            ... session?.token && ({ "x-access-token": session?.token })
        }});

        if(!resp.ok) {
          throw new Error('Failed to load fees');
        }

        const fees = await resp.json();
        return { fees };
        
    } catch (error) {
        console.log(error)
    }
}

// ### Registration Queries
export const fetchCourses = async (session: any) => {
    try {
        const resp = await fetch(`${API_URL}/api/ais/registrations/mount/${encodeURIComponent(session?.user?.tag)}`, {
        // const resp = await fetch(`${API_URL}/api/ais/registrations/mount/${encodeURIComponent('41329275')}`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json", 
              ... session?.token && ({ "x-access-token": session?.token })
        }});

        if(!resp.ok) {
          throw new Error('Failed to fetch courses');
        }

        const courses = await resp.json();
        return courses;
        
    } catch (error) {
        console.log(error)
    }
}

export const saveCourses = async (data: any, session: any) => {
    try {
        const resp = await fetch(`${API_URL}/api/ais/registrations`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json", 
              ... session?.token && ({ "x-access-token": session?.token })
            },
            body: JSON.stringify(data)
        });

        if(!resp.ok) {
            throw new Error('Failed to save courses');
        }

        const response = await resp.json();
        return response;
        
    } catch (error) {
        console.log(error)
    }
    
}

export const fetchSlip = async (session: any) => {
    try {
        const resp = await fetch(`${API_URL}/api/ais/registrations/${encodeURIComponent(session?.user?.tag)}`, {
        // const resp = await fetch(`${API_URL}/api/ais/registrations/${encodeURIComponent('41329275')}`, {
            method: 'GET',
            headers: {
            "Content-Type": "application/json", 
            ...session?.token && ({ "x-access-token": session?.token })
        }});

        if(!resp.ok) {
          throw new Error('Failed to fetch slip');
        }

        const courses = await resp.json();
        return courses;
        
    } catch (error) {
      console.log(error)
   }
}

export const downloadSlip = async () => {
    try {
       const resp = await fetch('http://localhost:5020');
       const user = await resp.json();
       return { user };

    } catch (error) {
      console.log(error);
    }
   
}
   

export const fetchMajors = async (session: any) => {
    try {
       const resp = await fetch(`${API_URL}/api/ais/majors/list`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json", 
                ...session?.token && ({ "x-access-token": session?.token })
        }});

        if(!resp.ok) {
          throw new Error('Failed to load majors');
        }

        const res = await resp.json();
        return res;
        
    } catch (error) {
        console.log(error)
    }
}
   