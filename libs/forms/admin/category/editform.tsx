import InnerCategoryForm from "@/components/admin/categories/InnerCategoryForm";
import { categoryFormValuesInterface } from "@/libs/contracts/admin";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { CallApi } from "@/libs/helpers/callApi";
import { withFormik } from "formik";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";

import * as yup from "yup";
import { Category } from "@/libs/model/category";
import UpdateCategory from "@/libs/services/admin/category";

interface EditCategoryFormProps {
  handleCancel: () => void;
  categoryRefech: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<any, unknown>>;
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
        await props.categoryRefech();
        props.handleCancel();
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
