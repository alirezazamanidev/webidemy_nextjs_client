import InnerEpisodeForm from "@/components/admin/episodes/InnerEpisodeForm";
import { EpisodeFormValuesInterface } from "@/libs/contracts/admin";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { Episode } from "@/libs/model/episode";
import { updateEpisode } from "@/libs/services/admin/episode";

import { withFormik } from "formik";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { toast } from "react-toastify";

import * as yup from "yup";

interface EditEpisodeFormProps {
  router: AppRouterInstance;
  episode: Episode;
}

const EditEpisodeFormValidationSchema = yup.object().shape({
  title: yup
    .string()
    .required("وارد کردن فیلد عنوان الزامیست")
    .min(5, "فیلد عنوان نمیتواند کمتر از 5 کارکتر باشد!")
    .max(255),
  body: yup
    .string()
    .required("وارد کردن فیلد متن الزامیست")
    .min(20, "فیلد متن نمی تواند کمتر از 20 کارکتر باشد"),
  video: yup
    .mixed()
    .test(
      "fileFormat",
      "پسوند ویدعو از پسوند های ویدعو نیست!",
      (value: any) => {

        if (value) {
          const allowedFormats = [
            'video/mp4',
            'video/mp3',
        
          ];
          return allowedFormats.includes(value.type);
        }
        return true;
      }
    ),
  type: yup.string().required("فیلد نوع جلسه نمی تواند خالی بماند"),
  season: yup.string().required("فیلد فصل مربوطه نمی تواند خالی بماند"),
  number: yup.number().required("فیلد شماره جلسه نمی تواند خالی بماند"),
});

const EditEpisodeForm = withFormik<
  EditEpisodeFormProps,
  EpisodeFormValuesInterface
>({
  mapPropsToValues: (props) => ({
    title: props.episode.title,
    body: props.episode.body,
    type: props.episode.type,
    season: props.episode.season._id,
    time: 0,
    number: props.episode.number,
  }),
  validationSchema: EditEpisodeFormValidationSchema,
  handleSubmit: async (values, { setFieldError, props }) => {
    try {
      await updateEpisode(props.episode._id, values);
      props.router.push("/admin/episodes");
      toast.success("تغییرات مورد  نظر با موفقیت ارسال شد!");
    } catch (err) {
      if (err instanceof BadRequestException) {
        setFieldError("title", err.message);
        return;
      }
    }
  },
})(InnerEpisodeForm);

export default EditEpisodeForm;
