import Input from "@/components/shared/forms/Input"
import { Course } from "@/libs/model/course"
import { ErrorMessage, Form, FormikProps, FormikValues } from "formik"
import Loading from "react-loading"


type props= FormikProps<any> & {
    courses:Course[]
    
}
export default function InnerSeasonForm({courses,setFieldValue,isSubmitting}:props){

    return (
        <>
          <Form className=" border text-right  border-gray-100 border-dashed mt-4 rounded-lg p-4">
                <div className=" flex items-center">
                  <div className=" w-1/2">
                   
                    <Input
                       label="عنوان فصل"
                      type="text"
                      name="title"
                      id="title"
                      className=" w-full outline-none bg-gray-600 rounded-lg px-3 py-2 text-white"
                    />
                    <ErrorMessage name="title" component='p' className="   text-red-600 text-sm rounded-lg my-2"/>
                  </div>
                  <div className=" w-1/2 mr-3">
              
                    <Input
                      label="شماره فصل"
                      type="number"
                      name="number"
                      id="number"
                      className=" w-full outline-none bg-gray-600 rounded-lg px-3 py-2 text-white"
                    />
                           <ErrorMessage name="number" component='p' className="   text-red-600 text-sm rounded-lg my-2"/>
                  </div>
                </div>
                <div className=" mt-5">
                  <label htmlFor="" className="  text-white tetx-lg block mb-3">
                    دوره مربوطه
                  </label>
                  <select
                  onChange={(e)=>setFieldValue('course',e.target.value)}
                    name=""
                    className=" text-white bg-gray-600  w-full px-4 py-2"
                    id=""
                  >
                    <option value="">لطفا دوره مربوطه را انتخاب  کنید</option>
                    {courses?.map((course: Course) => (
                      <option key={course?._id} value={course?._id}>
                        {course?.title}
                      </option>
                    ))}
                  </select>
                  <ErrorMessage name="course" component='p' className="   text-red-600 text-sm rounded-lg my-2"/>
                </div>
                <div className="mt-5">
                  <button type='submit' className=" w-full  flex justify-center items-center rounded-lg bg-gradient-to-r from-blue-750 to-blue-250 text-white px-3 py-3">
                    {
                        isSubmitting ?
                        (
                            <Loading type='bars' color="#fff" width={30} height={30}/>
                        ):<span>ایجاد فصل</span>
                    }
                  </button>
               
                </div>
              </Form>
        </>
    )
}