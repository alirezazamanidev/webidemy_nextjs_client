import NavbarLayouts from "@/components/public/layouts/NavbarLayout";

import UserPanelHeaderLayout from "@/components/public/user/UserPanelHeader";
export default function UserPanelPage({
  params: { username },
}: {
  params: { username: string };
}) {
  return (
    <>
      <main >
        <NavbarLayouts />
        <UserPanelHeaderLayout/>
   
      </main>
    </>
  );
}
