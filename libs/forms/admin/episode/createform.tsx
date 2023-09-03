import InnerEpisodeForm from "@/components/admin/episodes/InnerEpisodeForm";
import { EpisodeFormValuesInterface } from "@/libs/contracts/admin";

import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { createCourse } from "@/libs/services/admin/course";
import { createEpisode } from "@/libs/services/admin/episode";

import { withFormik } from "formik";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { toast } from "react-toastify";

import * as yup from "yup";

interface CreateEpisodeFormProps {
  router: AppRouterInstance;
}

const CreateEpisodeFormValidationSchema = yup.object().shape({
  title: yup
    .string()
    .required("وارد کردن فیلد عنوان الزامیست")
    .min(5, "فیلد عنوان نمیتواند کمتر از 5 کارکتر باشد!")
    .max(255),
  body: yup
    .string()
    .required("وارد کردن فیلد متن الزامیست")
    .min(20, "فیلد متن نمی تواند کمتر از 20 کارکتر باشد"),
  video: yup.mixed().required("وارد کردن ویدعو برای دوره الزامیست"),
  type: yup.string().required("فیلد نوع جلسه نمی تواند خالی بماند"),
  season: yup.string().required("فیلد فصل مربوطه نمی تواند خالی بماند"),
  number:yup.number().required('فیلد شماره جلسه نمی تواند خالی بماند')
});

const CreateEpisodeForm = withFormik<
  CreateEpisodeFormProps,
  EpisodeFormValuesInterface
>({
  mapPropsToValues: (props) => ({
    title: "",
    body: "",
    type: "",
    season: "",

    time: 0,
    video: {},
    number: 0,
  }),
  validationSchema: CreateEpisodeFormValidationSchema,
  handleSubmit: async (valuse, { setFieldError, props }) => {
    try {
      

      await createEpisode(valuse);
      props.router.push("/admin/episodes");
      toast.success("جلسه مورد نظر با موفقیت در سایت قرار گرفت.");
    } catch (err) {
      if (err instanceof BadRequestException) {
        setFieldError("title", err.message);
        return;
      }
    }
  },
})(InnerEpisodeForm);

export default CreateEpisodeForm;
