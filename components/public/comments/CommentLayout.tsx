"use client";
import { useEffect, useState } from "react";
import useAuth from "@/libs/hooks/useAuth";
import { Course } from "@/libs/model/course";
import { ErrorMessage, Form, Formik, FormikProps } from "formik";
import Loading from "react-loading";
import { toast } from "react-toastify";
import * as yup from "yup";
import { CallApi } from "@/libs/helpers/callApi";
import UserCommentLayout from "./UserCommentLayout";
import { Comment } from "@/libs/model/comment";

interface props {
  course?: Course;
}
export default function CommentLayout({ course }: props) {
  const [ShowCommentText, setShowCommentText] = useState<boolean>(false);
  const { user } = useAuth();


  const commentformValidationSchema = yup.object().shape({
    comment: yup
      .string()
      .required("افزودن متن نظر الزامیست")
      .min(8, "متن نظر نمی تواند کمتر از 8 کارکتر باشد"),
  });
  const handleSetComment = async (values: any) => {
    const res = await CallApi().post("/comments/create", values);
    if (res.status === 200) {
      toast.success(
        "نظر شما با موفقیت ثبت شد و بعد از تایید در سایت قرار میگیرد:(("
      );
    }
  };
  return (
    <>
      <div
        className="bg-dark-600 mt-5 p-4 lg:p-7 rounded-2xl"
        id="commentsButton"
      >
        <div className="flex items-center justify-between">
          <div className=" flex items-center my-3">
            <span className="flex ml-2">
              <span className="rounded-full  w-2 h-2 transition-all  bg-blue-750"></span>
            </span>
            <h2 className=" text-2xl text-blue-500">دیدگاه و پرسش</h2>
          </div>
          <div className=" ">
            <button
              onClick={() => {
                if (!user) {
                  toast.error("برای ارسال نظر ابتدا وارد سایت شوید!");
                  return;
                }
                setShowCommentText(true);
              }}
              className={`${
                ShowCommentText ? "hidden" : ""
              } text-gray-50  bg-gradient-to-r from-blue-750 to-blue-250 hover:bg-gray-900 border flex items-center  border-indigo-600 py-2 px-2 rounded-lg text-base`}
            >
              افزودن دیدگاه
            </button>
          </div>
        </div>
        <div>
          {ShowCommentText && (
            <Formik
              initialValues={{ comment: "", course: course?._id }}
              validationSchema={commentformValidationSchema}
              onSubmit={handleSetComment}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form className=" select-none border border-dashed flex flex-col   border-gray-600 mt-4 p-4 lg:p-7  rounded-lg">
                  <span className=" text-gray-100 text-xl mb-3">
                    {" "}
                    دیدگاه شما :{" "}
                  </span>
                  <textarea
                    disabled={isSubmitting}
                    onChange={(e) => setFieldValue("comment", e.target.value)}
                    className=" bg-gray-700 disabled:opacity-50 rounded-lg px-4 py-2 text-gray-200  text-base md:text-lg  placeholder:text-sm lg:placeholder:text-lg outline-none placeholder:text-gray-300"
                    placeholder=" نظر یا پرسش خود را وارد کنید ..."
                  />
                  <ErrorMessage
                    name="comment"
                    component="p"
                    className=" text-base lg:text-lg text-red-600 my-3"
                  />
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className=" bg-gradient-to-r disabled:opacity-50 from-blue-750 to-blue-250 text-base mt-3  px-4 py-3 rounded-lg  text-white flex justify-center  w-24 "
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
                </Form>
              )}
            </Formik>
          )}
          {
            course?.comments?.map((comment:any)=>(
              <UserCommentLayout key={comment._id} comment={comment}/>
            ))
          }
        </div>
      </div>
    </>
  );
}
