import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import PendingResult from "@/components/result/PendingResult";
import ResultCard from "@/components/result/ResultCard";
import { fetchResults } from "@/lib/queries";
import { Preferences } from "@capacitor/preferences";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/result/")({
  component: RouteComponent,
  pendingComponent: PendingResult,
  errorComponent: ({ error }) => <div>{error.message}</div>,
  loader: async () => {
    // Get User Session
    const { value: dm }: any = await Preferences.get({ key: "user" });
    const session: any = JSON.parse(dm);

    // Get Results
    const results = await fetchResults(session);
    if (results)
      await Preferences.set({
        key: "results",
        value: JSON.stringify(results?.results),
      });

    return results?.results;
  },
});

function RouteComponent() {
  const navigate = useNavigate({ from: Route.fullPath });
  const results = Route.useLoaderData();

  const resultsView = results?.map((row: any) => {
    const dt: any = row[1][0];
    let credit = row[1]
      ?.filter((r: any) => !!r?.status)
      .reduce((sm: number, cur: any) => (cur.credit || 0) + sm, 0);
    let gradepoint = row[1]
      ?.filter((r: any) => !!r?.status)
      .reduce(
        (sm: number, cur: any) =>
          (cur.credit || 0) * (cur.gradepoint || 0) + sm,
        0,
      );
    let gpa = credit > 0 ? (gradepoint / credit).toFixed(2) : "0.00";

    return {
      year: Math.ceil(dt.semesterNum / 2),
      semester: dt?.session?.semester,
      academicYear: dt?.session?.year,
      data: row[1],
      gpa,
      cgpa: "0.00",
    };
  });

  const loadCgpa = (): any => {
    let credit = 0;
    let gradepoint = 0;
    const cgpa: string[] = [];
    if (results) {
      results.forEach((result: any) => {
        const [_, row] = result;
        credit += row
          ?.filter((r: any) => !!(r as any)?.status === true)
          .reduce(
            (sum: number, cur: any) => ((cur as any)?.credit || 0) + sum,
            0,
          );
        gradepoint += row
          ?.filter((r: any) => !!(r as any)?.status === true)
          .reduce(
            (sum: number, cur: any) =>
              ((cur as any)?.credit || 0) * ((cur as any)?.gradepoint || 0) +
              sum,
            0,
          );
        let gpa = credit > 0 ? gradepoint / credit : 0;
        cgpa.push(gpa.toFixed(2));
      });
    }
    return cgpa;
  };

  return (
    <PageLayout Header={<PageHeader title="Results" menuLink="/home" />}>
      {/* <h2 className="mx-4 mt-4 text-xl text-center text-red-950 font-semibold">Academic Result Statement</h2> */}
      <div className="flex flex-col items-center space-y-1">
        <h2 className="mx-4 mt-4 text-lg sm:text-xl text-center text-(--theme-primary) font-semibold">
          Academic Result Statement
        </h2>
        <p className="px-4 font-extrabold text-base sm:text-lg rounded border-2 border-(--theme-primary)/50 text-(--theme-primary)/50">
          CGPA: {loadCgpa()[loadCgpa().length - 1]}
        </p>
      </div>
      <main className="relative p-5 flex flex-col space-y-4 h-[90vh] overflow-y-scroll">
        {resultsView?.map((row: any, i: number) => (
          <button
            key={i}
            onClick={() => {
              navigate({
                to: `${i}`,
                search: () => ({
                  data: JSON.stringify(row?.data),
                  gpa: row?.gpa,
                  cgpa: loadCgpa()[i],
                  title: `Year ${row?.year}, ${row?.semester == "SEM1" ? "First" : "Second"} Semester`,
                  subtitle: `${row?.academicYear} Academic Year`,
                }),
              });
            }}
          >
            <ResultCard
              key={i}
              title={`Year ${row?.year}, ${row?.semester == "SEM1" ? "First" : "Second"} Semester`}
              subtitle={`${row?.academicYear} Academic Year`}
            />
          </button>
        ))}

        {/* <ResultCard title="Year 1, Second Semester" subtitle="2015/2016 Academic Year" link="/result/2"/>
         <ResultCard title="Year 2, First Semester" subtitle="2016/2017 Academic Year" link="/result/3"/>
         <ResultCard title="Year 2, Second Semester" subtitle="2016/2017 Academic Year" link="/result/4"/>
         <ResultCard title="Year 3, First Semester" subtitle="2016/2017 Academic Year" link="/result/4"/>
         <ResultCard title="Year 3, Second Semester" subtitle="2016/2017 Academic Year" link="/result/4"/>
         <ResultCard title="Year 4, First Semester" subtitle="2016/2017 Academic Year" link="/result/4"/>
         <ResultCard title="Year 4, Second Semester" subtitle="2016/2017 Academic Year" link="/result/4"/> */}
      </main>
    </PageLayout>
  );
}
