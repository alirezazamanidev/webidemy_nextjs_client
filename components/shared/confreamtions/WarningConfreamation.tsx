
import { Form, Formik } from "formik";
import { AiOutlineWarning } from "react-icons/ai";
import Modal from "../modals/modal";
import Loading from "react-loading";

interface props {
    title: string;
    descreaption: string;
    handleTrue: () => void;
    handleCancel: () => void;
  }

export default function WarningConfreamation({title,descreaption,handleCancel,handleTrue}:props) {
  return (
    <>
      <Modal show={true} setShow={handleCancel}>
        <div className="bg-white inline-block  w-full rounded-lg overflow-hidden max-w-lg shadow py-3 px-2 text-right ">
          <div className=" flex items-center ">
            <AiOutlineWarning className=" text-yellow-400 text-3xl ml-2" />
            <h2 className=" text-gray-800 text--lg">{title}</h2>
          </div>
          <hr className=" text-gray-800 my-3" />
          <p className=" text-gray-500 text-sm max-w-sm"> {descreaption}</p>
          <hr className=" text-gray-500 my-3" />

          <Formik initialValues={{}} onSubmit={handleTrue}>
            {({ isSubmitting }) => (
              <Form>
                <div className=" flex items-center  mt-3">
                  <button
                    type="submit"
                    className=" text-white ml-2 bg-green-600 text-sm px-3 py-2 rounded-md"
                  >
                    {isSubmitting ? (
                      <span className=" flex justify-center items-center">
                        
                        <Loading className=" scale-75" width={30} height={25} />
                      </span>
                    ) : (
                      <span >اعمال تغییرات</span>
                    )}
                  </button>
                  <button
                    onClick={handleCancel}
                    className=" text-white bg-gray-600 text-sm px-3 py-2 rounded-md"
                  >
                    انصراف
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  )
}
