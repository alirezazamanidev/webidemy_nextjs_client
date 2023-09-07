import InnerCategoryForm from "@/components/admin/categories/InnerCategoryForm";
import { categoryFormValuesInterface } from "@/libs/contracts/admin";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { withFormik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Category } from "@/libs/model/category";
import UpdateCategory from "@/libs/services/admin/category";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

interface EditCategoryFormProps {
  handleCancel?: () => void;
  router: AppRouterInstance;
  cate: Category;
}

const EditCategoryFormValidationSchema = yup.object().shape({
  title: yup
    .string()
    .required("وارد کردن فیلد عنوان الزامیست")
    .min(5, "فیلد عنوان نمیتواند کمتر از 5 کارکتر باشد!")
    .max(255),
});

const EditCategoryForm = withFormik<
  EditCategoryFormProps,
  categoryFormValuesInterface
>({
  mapPropsToValues: (props) => ({
    title: props.cate.title,
  }),
  validationSchema: EditCategoryFormValidationSchema,
  handleSubmit: async (valuse, { setFieldError, props }) => {
    try {
      await UpdateCategory(props.cate._id, valuse);
      props.router.push("/admin/categories");
      toast.success("دسته بندی با موفقیت ویرایش شد!");
    } catch (err) {
      if (err instanceof BadRequestException) {
        setFieldError("title", err.message);
        return;
      }
    }
  },
})(InnerCategoryForm);

export default EditCategoryForm;
