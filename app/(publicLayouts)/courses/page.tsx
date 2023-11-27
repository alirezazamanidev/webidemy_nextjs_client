
import CoursesListLayout from "@/components/public/course/CoursesListLayout";
import { GetAllCourses } from "@/libs/services/home/course";

interface props {
  searchParams: {
    page: number | undefined,
    sort: string | undefined
    category: string | undefined
  }
}
export default async function CoursesPage({ searchParams: { page, sort, category } }: props) {
  const coursesListData = await GetAllCourses({ page: page ?? 1, pre_page: 8, sort: sort, category });

  return (
    <>
      <main className=" mt-20">
        <div className=" container mx-auto">

          <CoursesListLayout coursesData={coursesListData} />
        </div>
      </main>
    </>
  );
}


