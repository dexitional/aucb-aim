import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import { InfoIcon } from "lucide-react";

export const Route = createFileRoute("/instruction")({
    component: Instruction,
  });
  
export default function Instruction() {
  return (
    <PageLayout Header={<PageHeader title="Registration Guide" menuLink="/register" />} className="relative">
      <main className="relative px-3 py-5 h-[90vh] overflow-y-scroll">
         
         <div className="flex flex-col space-y-8">
            <dl className="px-3 py-4 shadow-lg border-l-4 border-gray-200 rounded-lg flex flex-col space-y-4">
                <dt className="font-semibold text-base text-[var(--theme-secondary)]">Compulsory Courses</dt>
                <dd className="flex flex-col space-y-3">
                    <p>These courses are compulsory and automatically selected or checked for registration.</p>
                    <p>These courses cannot be ommitted or deselected.</p>
                </dd>
            </dl>
            <dl className="px-3 py-4 shadow-lg border-l-4 border-gray-200 rounded-lg flex flex-col space-y-4">
                <dt className="font-semibold text-base text-[var(--theme-secondary)]">Elective Courses</dt>
                <dd className="flex flex-col space-y-3">
                    <p>These courses are specific to the student major and might automatically be selected or checked for registration.</p>
                    <p>These courses might be locked or made optional for selection.</p>
                </dd>
            </dl>
            <dl className="px-3 py-4 shadow-lg border-l-4 border-gray-200 rounded-lg flex flex-col space-y-4">
                <dt className="font-semibold text-base text-[var(--theme-secondary)]">Optional Courses</dt>
                <dd className="flex flex-col space-y-3">
                    <p>These courses are optional and are chosen if related to academic curriculum for the semester.</p>
                </dd>
            </dl>

            <dl className="px-3 py-4 shadow-lg border-l-4 border-gray-200 rounded-lg flex flex-col space-y-4">
                <dt className="font-semibold text-base text-[var(--theme-secondary)]">Resit Courses</dt>
                <dd className="flex flex-col space-y-3">
                    <p>These courses are optional but must be taken to fulfill the policy of redeeming any failed course to be eligle to complete a program.</p>
                    <p>Please note that there are strict policies on resit/retake and you must consult the academic policy for details.</p>
                    <p>Courses trailed or failed in first semster are are automatically unlocked in first semester registrations after paying the resit fees. </p>
                    <p>Same applies for courses failed in second semster, they are unlocked during second semester registrations after fulfilling the resit payment. </p>
                </dd>
            </dl>
         </div>
      </main>
      <Link to="/profile-form" className="px-4 py-1 absolute bottom-6 right-4 rounded-xl flex items-center space-x-2 bg-[var(--theme-primary)]/80 hover:bg-[var(--theme-primary)] text-white">
          <InfoIcon size={16} />
          <span>Edit</span>
        </Link>
    </PageLayout>
  )
}
