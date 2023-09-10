import InnerUserPanleForm from "@/components/public/user/InnerUserPanelForm";
import { EditUserPanelFormValuesInterface } from "@/libs/contracts/home";
import { CallApi } from "@/libs/helpers/callApi";
import { userType } from "@/libs/model/user";
import { withFormik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
interface EditUserPanelForm {
  user: userType;
  refresh:()=>void
}
const regexPattern = /^[a-zA-Z0-9-\s]+$/;
const EditUserPanelFormValidationSchema = yup.object().shape({
  fullname: yup
    .string()
    .required("افزودن نام ونام خانوادگی  الزامیست")
    .min(5, "فلید مورد نظر نمی نواند کمتر از 5 کارکتر باشد!"),
  phone: yup.string().required("افزودن شماره موبایل الزامیست"),

  username: yup
    .string()
    .required("افزودن نام کاربری الزامیست")
    .matches(
      regexPattern,
      "نام کاربری فقط میتواند شامل حروف انگلیسی اعداد و خط فاصله باشد!"
    ),
    biography:yup.string().max(500,'حداکثر تعداد کارکتر برای متن بیوگرافی 500 عدد است')
});
const EditUserPanelForm = withFormik<
  EditUserPanelForm,
  EditUserPanelFormValuesInterface
>({
  mapPropsToValues: (props) => ({
    fullname: props.user?.fullname,
    phone: props.user?.phone,
    email: props.user?.email || "",
    username: props.user?.username.substring(1),
    biography: props.user?.biography,
  }),
  validationSchema: EditUserPanelFormValidationSchema,
  handleSubmit: async (values,{props}) => {
    try {
      const res = await CallApi().post("users/edit/profile", values);
      if(res.status===200){
        await props.refresh();
        toast.success('تغییرات با موفقیت انجام شد :))')
      }
    } catch (err) {
      console.log(err);
    }
  },
})(InnerUserPanleForm);

export default EditUserPanelForm;
