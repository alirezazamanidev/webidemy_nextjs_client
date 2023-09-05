import InnerSeasonForm from "@/components/admin/season/InnerSeasonForm";
import { SeasonFormValuseInterface } from "@/libs/contracts/admin";

import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { Course } from "@/libs/model/course";
import { Season } from "@/libs/model/seasson";
import { UpdateSeason, createSeason } from "@/libs/services/admin/season";

import { withFormik } from "formik";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { toast } from "react-toastify";

import * as yup from "yup";

interface EditSeasonFormProps {
  router: AppRouterInstance;
  season?: Season;
}

const EditSeasonFormValidationSchema = yup.object().shape({
  title: yup
    .string()
    .required("وارد کردن فیلد عنوان الزامیست")
    .min(5, "فیلد عنوان نمیتواند کمتر از 5 کارکتر باشد!")
    .max(255),
  number: yup.number().required("وارد کرد فیلد مورد نطر الزامیست"),
  course: yup.string().required("وارد کردن فیلد دوره مربوطه الزامیت"),
});

const EditSeasonForm = withFormik<
  EditSeasonFormProps,
  SeasonFormValuseInterface
>({
  mapPropsToValues: (props) => ({
    title: props.season?.title,
    number: props.season?.number,
    course: props.season?.course._id,
  }),
  validationSchema: EditSeasonFormValidationSchema,
  handleSubmit: async (valuse, { setFieldError, props }) => {
    try {
      await UpdateSeason(valuse, props.season?._id);
      props.router.push("/admin/seasons");
      toast.success("فصل مورد نظر با موفقیت ویرایش شد.");
    } catch (err) {
      if (err instanceof BadRequestException) {
        setFieldError("title", err.message);
        return;
      }
    }
  },
})(InnerSeasonForm);

export default EditSeasonForm;
