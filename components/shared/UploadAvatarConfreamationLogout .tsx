"use client";

import React from "react";
import Modal from "./modals/modal";
import { Form, Formik } from "formik";
import Loading from "react-loading";
interface props {
  handleTrue: () => void;
  handleCancel: () => void;
}

export default function LogoutConfreamation({
  handleCancel,
  handleTrue,
}: props) {
  return (
    <>
      <Modal show={true} setShow={handleCancel}>
       <>
       <div className="">

       </div>
       
       
       
       </>
      </Modal>
    </>
  );
}
