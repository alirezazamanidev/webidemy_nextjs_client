import InnerRegisterForm from "@/components/auth/InnerRegisterForm";
import { RegisterFormValuesInterFace } from "@/libs/contracts/auth";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { StoreCookieForLogin } from "@/libs/helpers/auth";
import { CallApi } from "@/libs/helpers/callApi";
import { withFormik } from "formik";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { toast } from "react-toastify";
import * as yup from "yup";
interface RegisterFormProps {
  setToken: (token: string) => void;
  router: AppRouterInstance;
  setPhone:(phone:string)=>void

}
const regexPhone = /^(09[0-9]\d{8}|0903\d{7})$/;

const RegisterFormValidationSchema = yup.object().shape({
  fullname: yup
    .string()
    .required("لطفا نام و نام خانوادگی خود را وارد کنید")
    .min(3, " فیلد مورد نظر نمیتواند کمتر از 3 کارکتر باشد"),
  phone: yup
    .string()
    .required("وارد کردن فیلد شماره تلفن الزامیست")
    .matches(regexPhone, "فرمت شماره تلفن نادرست است"),
});
const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterFace>(
  {
    mapPropsToValues: (props) => ({
      fullname: "",
      phone: "",
    }),
    validationSchema: RegisterFormValidationSchema,
    handleSubmit: async (valuse, { props }) => {
      props.setPhone(valuse.phone)
      try {
        const res = await CallApi().post("auth/local/signUp", valuse);
        // if (res.status == 203) {
        //   toast.error("کد تایید هنوز منقضی نشده است!");
        //   return;
        // }
        if (res.status === 201) {
          await StoreCookieForLogin(
            res?.data?.access_token,
            res?.data?.refresh_token
          );
          await props.router.push("/");
          toast.success('عضویت با موفقیت انجام شد:))')
          return;
        }
      } catch (err) {
        if (err instanceof BadRequestException) {
          toast.error(err?.message);
        }
      }
    },
  }
)(InnerRegisterForm);

export default RegisterForm;
