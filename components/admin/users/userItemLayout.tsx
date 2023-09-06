import { useState } from "react";
import DeleteConfreamation from "@/components/shared/confreamtions/DeleteConfreamation";
import { DeleteCourse } from "@/libs/services/admin/course";
import { toast } from "react-toastify";
import ImageComponent from "@/components/shared/ImageComponent";
import defaultAvatarUser from "@/public/images/defualtAvatar.png";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";
import { userType } from "@/libs/model/user";
import Image from "next/image";
import { MdAdminPanelSettings, MdDeleteOutline } from "react-icons/md";
import { AdminToggleUser, DeleteUser } from "@/libs/services/admin/user";
import { AiOutlineUser } from "react-icons/ai";
import WarningConfreamation from "@/components/shared/confreamtions/WarningConfreamation";
import useAuth from "@/libs/hooks/useAuth";
interface props {
  user: userType;
  userRefeach: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<any, unknown>>;
}
export default function UserItemLayout({ user, userRefeach }: props) {
  const [showDeleteConfrimation, setShowDeleteConfrimation] =
    useState<boolean>(false);
  const [showwraningConfrimation, setShowwraningConfrimation] =
    useState<boolean>(false);
  const { user: userLogin } = useAuth();

  const deleteHandle = async () => {
    try {
      await DeleteUser(user._id);
      await userRefeach();
      setShowDeleteConfrimation(false);
      toast.success("کاربر مورد نظر با موفقیت حذف شد!");
    } catch (err) {
      console.log(err);
    }
  };

  const adminToggleHandler = async () => {
    await AdminToggleUser(user?._id);
    await userRefeach();
    setShowwraningConfrimation(false);
    toast.success("اعمال تغیرات با موفقیت انجام شد :))");
  };

  return (
    <>
      <tr className="border border-neutral-500  text-white">
        <td className=" hidden">
          {showDeleteConfrimation && (
            <DeleteConfreamation
              title={`حذف کاربر ${user?.username}`}
              descreaption="آیا از حذف کاربر مورد نظر اطمینان دارید .در صورت تایید اطلاعات کاربر باز نخواهد گشت"
              handleTrue={deleteHandle}
              handleCancel={() => setShowDeleteConfrimation(false)}
            />
          )}
        </td>
        <td className=" hidden">
          {showwraningConfrimation && (
            <WarningConfreamation
              title={` اعمال تغییران برروی کاربر ${user?.username}`}
              descreaption={`ایا از اعمال سطج کاربر اطمینان دارد ؟`}
              handleTrue={adminToggleHandler}
              handleCancel={() => setShowwraningConfrimation(false)}
            />
          )}
        </td>
        <td className="whitespace-nowrap  px-6 py-4 font-medium flex justify-center">
          {user?.avatar === "" ? (
            <Image
              src={defaultAvatarUser}
              className=" rounded-full object-cover"
              width={50}
              height={50}
              alt={user?.username}
            />
          ) : (
            <ImageComponent
              width={300}
              height={300}
              alt={user?.username}
              url={user?.avatar}
            />
          )}
        </td>
        <td className="whitespace-nowrap   py-4 ">
          <div className=" flex justify-center items-center gap-x-3">
            {userLogin?.id === user?._id && (
              <AiOutlineUser className=" text-2xl" />
            )}
            <span>{user?.fullname}</span>
          </div>
        </td>
        <td className="whitespace-nowrap  py-4">{user?.username}</td>
        <td className="whitespace-nowrap  py-4">
          {user?.email ? (
            <p className=" text-gray-300">{user.email}</p>
          ) : (
            <p className=" text-red-500">ثبت نشده</p>
          )}
        </td>
        <td className="whitespace-nowrap  py-4">{user?.phone}</td>
        <td className="whitespace-nowrap   py-4">
          {user?.admin ? (
            <p className=" text-red-600">ادمین</p>
          ) : (
            <p className=" text-blue-500">کاربر</p>
          )}
        </td>
        <td className="whitespace-nowrap   py-4 ">
          <div className=" flex items-center gap-x-2 justify-center text-sm md:text-lg">
            <button
              onClick={() => setShowwraningConfrimation(true)}
              className={` ${
                user?.admin
                  ? "  bg-red-800 hover:bg-red-700"
                  : "bg-blue-250 hover:bg-blue-550"
              }  duration-500 transition-colors p-3 rounded-full`}
            >
              {user?.admin ? <AiOutlineUser /> : <MdAdminPanelSettings />}
            </button>
            <button
              onClick={() => setShowDeleteConfrimation(true)}
              className={` text-gray-200 bg-red-600 hover:bg-red-800 duration-500 transition-colors p-3  rounded-full ${
                userLogin?.id !== user?._id ? "opacity-100 cursor-pointer" : "opacity-60 cursor-not-allowed"
              } `}
              disabled={userLogin?.id === user?._id ? true : false}
            >
              <MdDeleteOutline />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
