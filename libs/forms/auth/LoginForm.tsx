"use client";
import InnerLoginForm from "@/components/auth/InnerLoginForm";
import { LoginFormValuesInterFace } from "@/libs/contracts/auth";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { CallApi } from "@/libs/helpers/callApi";
import { withFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { StoreCookieForLogin } from "@/libs/helpers/auth";

interface LoginFormProps {
  router: AppRouterInstance;
  setToken: (token: string) => void;
  setPhone:(phone:string)=>void
}

const regexPhone = /^(09[0-9]\d{8}|0903\d{7})$/;
const LoginFormValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .required("وارد کردن شماره تلفن الزامیست")
    .matches(regexPhone, "فرمت شماره تلفن نادرست است"),
});
const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterFace>({
  mapPropsToValues: (props) => ({
    phone: "",
  }),
  validationSchema: LoginFormValidationSchema,
  handleSubmit: async (valuse, { props }) => {
    props.setPhone(valuse.phone);

    try {
      const res = await CallApi().post("auth/local/signIn", valuse);
     
      // if (res.status == 203) {
      //   toast.error("کد تایید هنوز منقضی نشده است!");
      //   return;
      // }
      if (res.status === 200) {
        await StoreCookieForLogin(
          res?.data?.access_token,
          res?.data?.refresh_token
        );
        await props.router.push("/");
        toast.success('ورود با موفقیت انجام شد:))')
        return;
      }
    } catch (err) {
      if (err instanceof BadRequestException) {
        toast.error(err?.message);
      }
    }
  },
})(InnerLoginForm);

export default LoginForm;
