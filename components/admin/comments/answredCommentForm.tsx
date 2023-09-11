"use client";

import ImageComponent from "@/components/shared/ImageComponent";
import Modal from "@/components/shared/modals/modal";
import { Comment } from "@/libs/model/comment";
import { ErrorMessage, Form, Formik } from "formik";
import defaultPhotoAvatar from "@/public/images/photo/avatarDefalt.webp";
import Image from "next/image";
import * as yup from "yup";
import Loading from "react-loading";
import useAuth from "@/libs/hooks/useAuth";
interface props {
  handleCancel: () => void;
  HandleSubmit: (values: any) => void;
  comment: Comment;
}
const AnswredCommentForm = ({ handleCancel, HandleSubmit, comment }: props) => {
  const { user } = useAuth();
  const answredCommentFormValidaionSchema = yup.object().shape({
    comment: yup
      .string()
      .required("فیلد نظر نمی تواند خالی بماند")
      .min(5, "فیلد مورد نظر نمیتواند کمتر از 5 کارکتر باشد")
      .max(200, "خدواکثر کارکتر های ورودی برای فیلد  ۲۰۰ عدد است"),
  });
  return (
    <>
      <Modal show={true} setShow={handleCancel}>
        <div className=" bg-dark-600 p-3 lg:p-6 rounded-xl w-2/5">
          <div className=" w-full p-3 border border-dashed border-gray-500 rounded-xl ">
            <div className=" p-2 flex items-center gap-4">
              <div className=" w-16">
                {comment?.user?.avatar ? (
                  <ImageComponent
                    width={300}
                    height={300}
                    className=" rounded-full border-2 border-white object-cover aspect-square "
                    url={comment?.user?.avatar}
                    alt={comment?.user?.fullname}
                  />
                ) : (
                  <Image
                    src={defaultPhotoAvatar}
                    width={300}
                    height={300}
                    className=" rounded-full object-cover"
                    alt="default"
                  />
                )}
              </div>
              <div className=" flex flex-col items-center justify-center gap-1">
                <span className=" text-lg text-gray-100">
                  {comment?.user?.fullname}
                </span>
                <span className=" text-base text-gray-400 dir-ltr">
                  {comment?.user?.username}
                </span>
              </div>
            </div>
            <div className="  mt-4">
              <h2 className=" text-2xl mb-2 text-gray-300 text-right">
                کامنت کاربر :
              </h2>
              <div className="border border-blue-350  h-[100px] border-dotted p-4 rounded-xl">
                <p className=" text-gray-200 text-lg text-right">
                  {comment?.comment}
                </p>
              </div>
            </div>

            <Formik
              initialValues={{
                parent: comment?._id,
                comment: "",
                course: comment.course?._id,
                user: user._id,
              }}
              onSubmit={HandleSubmit}
              validationSchema={answredCommentFormValidaionSchema}
            >
              {({ isSubmitting, setFieldValue, errors }) => (
                <Form className=" select-none border border-dashed flex flex-col   border-gray-600 mt-4 p-3  rounded-lg">
                  <span className=" text-gray-100 text-xl  text-right my-3 mb-5">
                    {" "}
                    پاسخ به کاربر :{" "}
                  </span>
                  <textarea
                    rows={10}
                    disabled={isSubmitting}
                    onChange={(e) => setFieldValue("comment", e.target.value)}
                    className=" bg-gray-700 disabled:opacity-50 rounded-lg px-4 py-2 text-gray-200  text-base md:text-lg  placeholder:text-sm lg:placeholder:text-lg outline-none placeholder:text-gray-300"
                    placeholder="متنی را وارد کنید"
                  />
                  <ErrorMessage
                    name="comment"
                    component="p"
                    className=" text-base lg:text-lg text-red-600 my-3 text-right"
                  />
                  <div className=" flex items-center gap-3 w-full">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className=" bg-gradient-to-r disabled:opacity-50 from-blue-750 to-blue-250 text-base mt-3  px-4 py-3 rounded-lg  text-white flex justify-center  w-1/2 "
                    >
                      {isSubmitting ? (
                        <Loading
                          type="bubbles"
                          color="#fff"
                          width={30}
                          height={30}
                          className=""
                        />
                      ) : (
                        <span>ارسال نظر </span>
                      )}
                    </button>
                    <span
                      onClick={handleCancel}
                      className=" bg-gradient-to-r from-red-600 to-red-700 text-base mt-3  px-4 py-3 rounded-lg  text-white flex justify-center  w-1/2 "
                    >
                      انصراف
                    </span>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AnswredCommentForm;
