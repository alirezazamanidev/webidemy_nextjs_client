import InnerCategoryForm from "@/components/admin/categories/InnerCategoryForm";
import { categoryFormValuesInterface } from "@/libs/contracts/admin";
import { BadRequestException } from "@/libs/exceptions/BadRequestException";
import { CallApi } from "@/libs/helpers/callApi";
import { withFormik } from "formik";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from 'react-query'

import * as yup from "yup";

interface CreateCategoryFormProps {
  handleCancel: () => void;
  setshowform: Dispatch<SetStateAction<boolean>>;
  categoryRefech:<TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
}

const CreateCategoryFormValidationSchema = yup.object().shape({
  title: yup
    .string()
    .required("وارد کردن فیلد عنوان الزامیست")
    .min(5, "فیلد عنوان نمیتواند کمتر از 5 کارکتر باشد!")
    .max(255),
});

const CreateCategoryForm = withFormik<
  CreateCategoryFormProps,
  categoryFormValuesInterface
>({
  mapPropsToValues: (props) => ({
    title: "",
  }),
  validationSchema: CreateCategoryFormValidationSchema,
  handleSubmit: async (valuse, { setFieldError, props }) => {
    try {
      const res = await CallApi().post("/admin/categories/create", valuse);

      if (res.status === 201) {
        await props.categoryRefech();
        props.setshowform(false);
        
        toast.success("دسته بندی با موفقیت ایجاد شد!");
      }
    } catch (err) {
      if (err instanceof BadRequestException) {
        setFieldError("title", err.message);
        return;
      }
    }
  },
})(InnerCategoryForm);

export default CreateCategoryForm;
