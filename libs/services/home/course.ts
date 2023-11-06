
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