"use client";
import InnerLoginForm from "@/components/auth/InnerLoginForm";
import { LoginFormValuesInterFace } from "@/libs/contracts/auth";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { CallApi } from "@/libs/helpers/callApi";
import { withFormik } from "formik";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import * as yup from "yup";
import { toast } from "react-toastify";
import { StoreCookieForLogin } from "@/libs/helpers/auth";

interface LoginFormProps {
  router: AppRouterInstance;
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
    try {
      const res = await CallApi().post("auth/local/signIn", valuse);
      if (res.status === 200) {
        await props.router.push("/");
        await StoreCookieForLogin(
          res.data?.access_token,
          res?.data?.refresh_token
        );
        toast.success(" ورود با موفقیت انجام شد :))");
        props.router.refresh();
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
