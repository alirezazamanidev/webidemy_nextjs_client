"use client";
import CreateCategoryForm from "@/libs/forms/admin/category/createform";
import { useRouter } from "next/navigation";
const CreateCategoryPage = () => {
  const router = useRouter();

  return (<>
  <main>

    <CreateCategoryForm router={router}/>

  </main>
  
   </>);
};

export default CreateCategoryPage;
