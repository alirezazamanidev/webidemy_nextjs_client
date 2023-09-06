import SearchBarLayout from "@/components/public/layouts/SearchBarLayout";
import EmptyIcon from "@/components/shared/EmptyIcon";

export default function CoursesPage() {
  return (
    <>
      <main className=" mt-20">
        <div className=" container mx-auto">
          <SearchBarLayout />
          {/* content courses */}
          <div className="  border-solid border-b pb-16 border-gray-700">
            <div className=" flex flex-col gap-5 justify-center items-center py-16">
              <EmptyIcon className=" w-6/12 h-6/12 md:w-4/12 md:h-4/12" />
              <h2 className=" text-3xl text-gray-500">دوره ای یافت نشد!</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
