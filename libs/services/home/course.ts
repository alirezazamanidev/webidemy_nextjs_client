import { redirect } from "next/navigation";

export async function GetCourses() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_API_URL}/courses`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("The error for get data");
  return res.json();
}


export async function GetSingleCourse(courseSlug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_API_URL}/courses/${courseSlug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },


  });


  if (res.status === 400) redirect("/not-found");
  return res.json();
}
