import React from 'react';
import {Formik, useFormik, useFormikContext, } from 'formik'

function FormCars() {
  // const formik = useFormik();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //   },
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  return (
    <Formik {...formik} >
    </Formik>
  );
}

export default FormCars;