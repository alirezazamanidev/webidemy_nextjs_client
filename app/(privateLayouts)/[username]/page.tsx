import NavbarLayouts from "@/components/public/layouts/NavbarLayout";
import ContentUserPanel from "@/components/public/user/ContentUserPanelLayout";

import UserPanelHeaderLayout from "@/components/public/user/UserPanelHeader";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params: { username },
}: {
  params: { username: string };
}) {
  const user = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_API_URL}/users/${username}`
  ).then((res) => res.json());
  

  if (user.statusCode === 404) {
    notFound();
  }

  return {
    title: `پروفایل ${user?.fullname}`,
  };
}
export default function UserPanelPage() {
  return (
    <>
      <main>
        <UserPanelHeaderLayout />
        <ContentUserPanel/>
      </main>
    </>
  );
}
