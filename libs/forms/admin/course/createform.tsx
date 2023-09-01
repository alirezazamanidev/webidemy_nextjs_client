import InnerCourseForm from "@/components/admin/courses/InnerCourseForm";
import { CourseFormValuseInterface } from "@/libs/contracts/admin";

import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { createCourse } from "@/libs/services/admin/course";

import { withFormik } from "formik";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { toast } from "react-toastify";

import * as yup from "yup";

interface CreateCourseFormProps {
  router: AppRouterInstance;
}

const CreateCourseFormValidationSchema = yup.object().shape({
  title: yup
    .string()
    .required("وارد کردن فیلد عنوان الزامیست")
    .min(5, "فیلد عنوان نمیتواند کمتر از 5 کارکتر باشد!")
    .max(255),
  body: yup
    .string()
    .required("وارد کردن فیلد متن الزامیست")
    .min(20, "فیلد متن نمی تواند کمتر از 20 کارکتر باشد"),
  description: yup
    .string()
    .required("وارد کردن فیلد توضیجات الزامیست")
    .min(50, "فیلد توضیحات نمی تواند کمتر از 50 کارکتر باشد"),
  condition: yup.string().required("وارد کردن فیلد وضعیت دوره الزامیست"),
  photo: yup
    .mixed()
    .required("وارد کردن تصویر برای دوره الزامیست")
    .test(
      "fileFormat",
      "پسوند تصویر از پسوند های تصاویر نیست!",
      (value: any) => {
        return (
          value &&
          [
            "image/png",
            "image/jpg",
            "image/jpeg",
            "image/svg",
            "image/webp",
          ].includes(value.type)
        );
      }
    ),
  type: yup.string().required("فیلد نوع دوره نمی تواند خالی بماند"),
  tags: yup.string().required("وارد کردن فیلد تگ الزامیست "),
});

const CreateCourseForm = withFormik<
  CreateCourseFormProps,
  CourseFormValuseInterface
>({
  mapPropsToValues: (props) => ({
    title: "",
    body: "",
    description: "",
    photo: {},
    price: "",
    toColor: "",
    fromColor: "",
    condition: "",
    tags: "",
    type: "",
  }),
  validationSchema: CreateCourseFormValidationSchema,
  handleSubmit: async (valuse, { setFieldError, props }) => {
    try {
      await createCourse(valuse);
      props.router.push("/admin/courses");
      toast.success("دوره مورد نظر با موفقیت در سایت قرار گرفت.");
    } catch (err) {
      if (err instanceof BadRequestException) {
        setFieldError("title", err.message);
        return;
      }
    }
  },
})(InnerCourseForm);

export default CreateCourseForm;
