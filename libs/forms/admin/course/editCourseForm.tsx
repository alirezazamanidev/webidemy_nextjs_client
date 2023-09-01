import InnerCourseForm from "@/components/admin/courses/InnerCourseForm";
import { CourseFormValuseInterface } from "@/libs/contracts/admin";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { Course } from "@/libs/model/course";
import { UpdateCourse, createCourse } from "@/libs/services/admin/course";

import { withFormik } from "formik";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { toast } from "react-toastify";

import * as yup from "yup";

interface EditCourseFormProps {
  router: AppRouterInstance;
  course: Course;
}

const EditCourseFormValidationSchema = yup.object().shape({
  // title: yup
  //   .string()
  //   .required("وارد کردن فیلد عنوان الزامیست")
  //   .min(5, "فیلد عنوان نمیتواند کمتر از 5 کارکتر باشد!")
  //   .max(255),
  // body: yup
  //   .string()
  //   .required("وارد کردن فیلد متن الزامیست")
  //   .min(20, "فیلد متن نمی تواند کمتر از 20 کارکتر باشد"),
  // description: yup
  //   .string()
  //   .required("وارد کردن فیلد توضیجات الزامیست")
  //   .min(50, "فیلد توضیحات نمی تواند کمتر از 50 کارکتر باشد"),
  // condition: yup.string().required("وارد کردن فیلد وضعیت دوره الزامیست"),
  // photo: yup
  //   .mixed()
  //   .required("وارد کردن تصویر برای دوره الزامیست")
  //   .test(
  //     "fileFormat",
  //     "پسوند تصویر از پسوند های تصاویر نیست!",
  //     (value: any) => {
  //       return (
  //         value &&
  //         [
  //           "image/png",
  //           "image/jpg",
  //           "image/jpeg",
  //           "image/svg",
  //           "image/webp",
  //         ].includes(value.type)
  //       );
  //     }
  //   ),
  // type: yup.string().required("فیلد نوع دوره نمی تواند خالی بماند"),
  // tags: yup.string().required("وارد کردن فیلد تگ الزامیست "),
});

const EditCourseForm = withFormik<
  EditCourseFormProps,
  CourseFormValuseInterface
>({
  mapPropsToValues: (props) => ({
    title: props?.course?.title,
    body: props?.course?.body,
    // photo:props?.course?.photos[720],
    description: props?.course?.description,
    price: props?.course?.price,
    tags: props?.course?.tags,
    condition: props?.course?.condition,
    fromColor: props?.course?.gradientColorCard?.fromColor,
    toColor: props?.course?.gradientColorCard?.toColor,
    type: props?.course?.type,
  }),
  validationSchema: EditCourseFormValidationSchema,
  handleSubmit: async (values, { setFieldError, props }) => {
    try {
      return console.log(values);
      
      await UpdateCourse(props.course._id, values);
      props.router.push("/admin/courses");
      toast.success("تغییرات مورد  نظر با موفقیت ارسال شد!");
    } catch (err) {
      if (err instanceof BadRequestException) {
        setFieldError("title", err.message);
        return;
      }
    }
  },
})(InnerCourseForm);

export default EditCourseForm;
