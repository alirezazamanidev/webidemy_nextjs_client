import InneVerifyPhoneForm from "@/components/auth/InnerVerifyPhoneForm";
import { verfiyPhoneFormValuesInterface } from "@/libs/contracts/auth";
import { NotAcceptableExceptions } from "@/libs/exceptions/NotAcceptableExceptions";
import { NotFoundException } from "@/libs/exceptions/NotFoundException";
import { StoreCookieForLogin } from "@/libs/helpers/auth";
import { CallApi } from "@/libs/helpers/callApi";

import { withFormik } from "formik";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { toast } from "react-toastify";

import * as yup from "yup";
interface verifyPhoneFormProps {
  router: AppRouterInstance;
  token?: string;
}
const verifyPhoneFormValidationSchema = yup.object().shape({
  code: yup.string().required(),
});
const VerifyPhoneForm = withFormik<
  verifyPhoneFormProps,
  verfiyPhoneFormValuesInterface
>({
  mapPropsToValues: (props) => ({
    code: "",
    token: props?.token,
  }),
  validationSchema: verifyPhoneFormValidationSchema,
  handleSubmit: async (valuse, { props }) => {
    try {
      const res = await CallApi().post("/auth/activationCode", valuse);

      if (res?.status === 200) {
       await props.router?.push("/");
        await StoreCookieForLogin(
          res?.data?.access_token,
          res?.data?.refresh_token
          );
          
        toast.success("ورود با موفقیت انجام شد :)");
      }
    } catch (err) {
      if (err instanceof NotFoundException) {
        toast.error(err?.message);
        return;
      }
      if (err instanceof NotAcceptableExceptions) {
        toast.error(err?.message);
        return;
      }
    }
  },
})(InneVerifyPhoneForm);

export default VerifyPhoneForm;
