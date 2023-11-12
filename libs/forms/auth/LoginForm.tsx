"use client";
import InnerLoginForm from "@/components/auth/InnerLoginForm";
import { LoginFormValuesInterFace } from "@/libs/contracts/auth";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { CallApi } from "@/libs/helpers/callApi";
import { withFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface LoginFormProps {
  router: AppRouterInstance;
  setToken: (token: string) => void;
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
     
      if (res.status == 203) {
        toast.error("کد تایید هنوز منقضی نشده است!");
        return;
      }
      if (res.status === 200) {
        props.setToken(res.data?.data?.verifyPhoneToken);
        await props.router.push("/login/verify");
        toast.success("کد تایید با موفقیت ارسال شد!");
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
