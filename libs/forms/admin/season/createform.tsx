
import InnerSeasonForm from "@/components/admin/season/InnerSeasonForm";
import { SeasonFormValuseInterface } from "@/libs/contracts/admin";

import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { Course } from "@/libs/model/course";
import { createCourse } from "@/libs/services/admin/course";
import { createSeason } from "@/libs/services/admin/season";

import { withFormik } from "formik";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { toast } from "react-toastify";

import * as yup from "yup";

interface CreateSeasonFormProps {
  router: AppRouterInstance;
  courses:Course[]
}

const CreateSeasonFormValidationSchema = yup.object().shape({
  title: yup
    .string()
    .required("وارد کردن فیلد عنوان الزامیست")
    .min(5, "فیلد عنوان نمیتواند کمتر از 5 کارکتر باشد!")
    .max(255),
  number:yup.number().required('وارد کرد فیلد مورد نطر الزامیست'),
  course:yup.string().required('وارد کردن فیلد دوره مربوطه الزامیت')
});

const CreateSeasonForm = withFormik<
  CreateSeasonFormProps,
  SeasonFormValuseInterface
>({
  mapPropsToValues: (props) => ({
    title: "",
    number:0,
    course:''
  }),
  validationSchema: CreateSeasonFormValidationSchema,
  handleSubmit: async (valuse, { setFieldError, props }) => {
    try {
      
      await createSeason(valuse);
      props.router.push("/admin/seasons");
      toast.success("فصل مورد نظر با موفقیت در سایت قرار گرفت.");
    } catch (err) {
      if (err instanceof BadRequestException) {
        setFieldError("title", err.message);
        return;
      }
    }
  },
})(InnerSeasonForm);

export default CreateSeasonForm;
