import { Course } from "@/libs/model/course";
import Image from "next/image";
import Link from "next/link";

interface props {
  course: Course;
}

export default function CardCourseSearchLayout({ course }: props) {
  return (
    <>
      <Link
        href={`/courses/${course?.slug}`}
        className=" flex bg-gray-1010 items-center gap-6 p-3 rounded-lg"
      >
        <div>
          <Image
            src={`https://api.webidemyyy.ir${course?.photos["360"]}`}
            width={70}
            height={50}
            alt={course?.title}
          />
        </div>
        <div className=" text-gray-200 text-lg">
          <h2>{course?.title}</h2>
        </div>
      </Link>
    </>
  );
}
