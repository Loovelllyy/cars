import React, {useEffect, useState} from 'react';
import { CarCardView } from "./CarCardView";
import redCar from '../../../public/assets/redCar.png';
import blackCar from '../../../public/assets/blackCar.png';
import greenCar from '../../../public/assets/greenCar.png';
import yellowCar from '../../../public/assets/yellowCar.png';
import {FormikProps} from "formik";

interface ICarCard {
  formik: FormikProps<any>,
  carName: 'carA' | 'carB' | 'carV' | 'carG',
}

export function CarCard({formik, carName}: ICarCard) {
  let [carImg, setCarImg] = useState(redCar);
  useEffect(() => {
    console.log(carName);
    switch (carName) {
      case 'carA':
        setCarImg(blackCar)
        return
      case "carB":
        setCarImg(redCar)
        return;
      case "carV":
        setCarImg(greenCar)
        return;
      case "carG":
        setCarImg(yellowCar)
        return;
      default:
        setCarImg('');
    }
  }, [])

  return (
    <CarCardView
      acceleration={formik.values[carName].acceleration}
      width={formik.values[carName].width}
      speed={formik.values[carName].speed}
      onChangeValue={formik.handleChange.bind(formik)}
      // onAccelerationChange={formik.handleChange}
      // onSpeedChange={setSpeed}
      // onWidthChange={setWidth}
      iconSrc={carImg}
      carName={carName}
    />
  )
}