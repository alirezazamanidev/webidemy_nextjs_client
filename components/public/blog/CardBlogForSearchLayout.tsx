import ImageComponent from "@/components/shared/ImageComponent";
import { Blog } from "@/libs/model/blog";
import Image from "next/image";
import Link from "next/link";

interface props {
  blog: Blog;
}

export default function CardBlogSearchLayout({ blog }: props) {
  console.log(blog);

  return (
    <>
      <Link
        href={`/blogs/${blog?.slug}`}
        className=" flex bg-gray-1010 items-center gap-6 p-3 rounded-lg"
      >
        <div
        >
          <div
            className=" w-20 h-12 inset-0 rounded-xl  flex justify-center items-center transition-all duration-1000" style={{
              background: `linear-gradient(to left top, ${blog?.GradientCardBlog?.toColor}, ${blog?.GradientCardBlog?.fromColor}`
            }}
          >
            <ImageComponent
              url={blog?.photos['360']}
              width={70}
              height={50}
              alt={blog?.title}
            />
          </div>

        </div>
        <div className=" text-gray-200 text-lg">
          <h2>{blog?.title}</h2>
        </div>
      </Link>
    </>
  );
}
