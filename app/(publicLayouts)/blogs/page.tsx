
import BlogsListLayout from "@/components/public/blog/blogListLayout";
import { GetAllBlogs } from "@/libs/services/home/blog";


interface props {
  searchParams: {
    page: number | undefined,
    sort: string | undefined
    category: string | undefined
  }
}
export default async function blogsPage({ searchParams: { page, sort, category } }: props) {
  const blogListData = await GetAllBlogs({ page: page ?? 1, pre_page: 8, sort: sort, category });
  
  return (
    <>
      <main className=" mt-20">
        <div className=" container mx-auto">

          <BlogsListLayout blogData={blogListData} />
        </div>
      </main>
    </>
  );
}


