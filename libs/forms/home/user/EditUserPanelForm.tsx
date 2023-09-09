import { EditUserPanelFormValuesInterface } from "@/libs/contracts/home";
import { userType } from "@/libs/model/user";
import { withFormik } from "formik";
import * as yup from 'yup';
interface EditUserPanelForm {
  user: userType;
}

const EditUserPanelFormValidationSchema=yup.object().shape({
    fullname:yup.string().required()
})
const EditUserPanelForm = withFormik<
  EditUserPanelForm,
  EditUserPanelFormValuesInterface
>({
  mapPropsToValues: (props) => ({
    fullname: props.user.fullname,
    phone: props.user.phone,
    email: props.user.email,
    username: props.user.username,
    biography: props.user.biography,
  }),
  validationSchema:
});
