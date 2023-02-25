import React from 'react';
import { CarCardView } from "./CarCardView";
import {FormikProps} from "formik";

interface ICarCard {
  formik: FormikProps<any>,
  name: 'carA' | 'carB' | 'carV' | 'carG',
  img: string;
}

export function CarCard({formik, name, img}: ICarCard) {

  return (
    <CarCardView
      acceleration={formik.values[name].acceleration}
      width={formik.values[name].width}
      speed={formik.values[name].speed}
      isActive={ formik.values[name].isActive }
      onChangeValue={formik.handleChange.bind(formik)}
      iconSrc={img}
      carName={name}
    />
  )
}