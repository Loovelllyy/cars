import React from 'react';
import { useFormik } from 'formik'
import {object, number, boolean} from 'yup';
import {CarCard} from "./CarCard";
import {Button, InputLabel, Stack, TextField} from "@mui/material";
import redCar from '../../public/assets/redCar.png';
import blackCar from '../../public/assets/blackCar.png';
import greenCar from '../../public/assets/greenCar.png';
import yellowCar from '../../public/assets/yellowCar.png';

import { isObgon } from '../helpers/isObgon';
import { obgonAbs } from '../helpers/obgonAbs';

export interface ICar {
  width: number | '',
  speed: number | '',
  acceleration: number | '',

  isActive?: boolean,
}

const carA: ICar = {
  width: '',
  speed: '',
  acceleration: '',
};

const carB: ICar = {
  width: '',
  speed: '',
  acceleration: '',
};

const carV: ICar = {
  width: '',
  speed: '',
  acceleration: '',
  isActive: false,
};

const carG: ICar = {
  width: '',
  speed: '',
  acceleration: '',
  isActive: false,
};

const Xlast = 300;

const deltaAbBefore: number | '' = '';
const deltaAbAfter: number | '' = '';
const deltaGvBefore: number | '' = '';
const deltaGvAfter: number | '' = '';

export type TInitialValue = {
  carA: ICar;
  carB: ICar;
  carV: ICar;
  carG: ICar;
  Xlast: number;
  deltaAbBefore: number | '';
  deltaAbAfter: number | '';
  deltaGvBefore: number | '';
  deltaGvAfter: number | ''
}
const REQ = 'Это поле обязательное'
const valid = object().shape({
    carA: object().shape({
      width: number().required(REQ).min(0, 'Минимальная длина машины: 0').max(10, 'Максимальная длина машины: 10'),
      speed: number().required(REQ).min(0, 'Минимальная скорость машины: 0').max(200, 'Максимальная скорость машины: 200'),
      acceleration: number().required(REQ).min(0, 'Минимальное ускорение машины: 0').max(4, 'Максимальное ускорение машины: 4'),
    }),
    carB: object().shape({
      width: number().required(REQ).min(0, 'Минимальная длина машины: 0').max(10, 'Максимальная длина машины: 10'),
      speed: number().required(REQ).min(0, 'Минимальная скорость машины: 0').max(200, 'Максимальная скорость машины: 200'),
      acceleration: number().required(REQ).min(0, 'Минимальное ускорение машины: 0').max(4, 'Максимальное ускорение машины: 4'),
    }),
    carV: object().shape({
      isActive: boolean(),
      width: number().when('isActive', {
        is: (isActive: boolean) => isActive,
        then: () => number().required(REQ).min(0, 'Минимальная длина машины: 0').max(10, 'Максимальная длина машины: 10'),
      }),
      speed: number().when('isActive', {
        is: (isActive: boolean) => isActive,
        then: () => number().required(REQ).min(0, 'Минимальная скорость машины: 0').max(200, 'Максимальная скорость машины: 200'),
      }),
      acceleration: number().when('isActive', {
        is: (isActive: boolean) => isActive,
        then: () => number().required(REQ).min(0, 'Минимальное ускорение машины: 0').max(4, 'Максимальное ускорение машины: 4'),
      }),
    }),
    carG: object().shape({
      isActive: boolean(),
      width: number().when('isActive', {
        is: (isActive: boolean) => isActive,
        then: () => number().required(REQ).min(0, 'Минимальная длина машины: 0').max(10, 'Максимальная длина машины: 10'),
      }),
      speed: number().when('isActive', {
        is: (isActive: boolean) => isActive,
        then: () => number().required(REQ).min(0, 'Минимальная скорость машины: 0').max(200, 'Максимальная скорость машины: 200'),
      }),
      acceleration: number().when('isActive', {
        is: (isActive: boolean) => isActive,
        then: () => number().required(REQ).min(0, 'Минимальное ускорение машины: 0').max(4, 'Максимальное ускорение машины: 4'),
      }),
    }),
})

export const FormCars = () => {
  // const formik = useFormik();
  const formik = useFormik({
    initialValues: {
      carA,
      carB,
      carV,
      carG,
      Xlast,
      deltaAbBefore,
      deltaAbAfter,
      deltaGvBefore,
      deltaGvAfter,
    },
    validationSchema: valid,
    onSubmit: (values) => {
      const test = isObgon(values);
      console.log(test);
    }
  });
  const {values:
    {
      carA: {isActive: activeA},
      carB: {isActive: activeB},
      carV: {isActive: activeV},
      carG: {isActive: activeG}
    }
  } = formik;
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Stack flexDirection='row' alignItems='center' gap={2}>
          <CarCard formik={formik} img={redCar} name='carA'></CarCard>
          <CarCard formik={formik} img={blackCar} name='carB'></CarCard>
          <CarCard formik={formik} img={greenCar} name='carV'></CarCard>
          <CarCard formik={formik} img={yellowCar} name='carG'></CarCard>
          <Stack flexDirection='column' gap={1}>
            <InputLabel>Расстояние между машинами А и Б до обгона:</InputLabel>
            <TextField
              // disabled={ !(activeA && activeB) }
              size='small'
              type='number'
              value={formik.values.deltaAbBefore}
              name='deltaAbBefore'
              id='deltaAbBefore'
              onChange={formik.handleChange}
            >
            </TextField>

            <InputLabel>Расстояние между машинами А и Б после обгона:</InputLabel>
            <TextField
              // disabled={ !(activeA && activeB) }
              size='small'
              type='number'
              value={formik.values.deltaAbAfter}
              name='deltaAbAfter'
              id='deltaAbAfter'
              onChange={formik.handleChange}
            >
            </TextField>

            <InputLabel>Расстояние между машинами В и Г до обгона:</InputLabel>
            <TextField
              disabled={ !(activeV && activeG) }
              size='small'
              type='number'
              value={formik.values.deltaGvBefore}
              name='deltaGvBefore'
              id='deltaGvBefore'
              onChange={formik.handleChange}
            >
            </TextField>

            <InputLabel>Расстояние между машинами  В и Г после обгона:</InputLabel>
            <TextField
              disabled={ !(activeV && activeG) }
              size='small'
              type='number'
              value={formik.values.deltaGvAfter}
              name='deltaGvAfter'
              id='deltaGvAfter'
              onChange={formik.handleChange}
            ></TextField>

            <InputLabel>Длина дороги:</InputLabel>
            <TextField
              size='small'
              type='number'
              value={formik.values.Xlast}
              name='Xlast'
              id='Xlast'
              onChange={formik.handleChange}
            ></TextField>

            <Button variant="contained" color="success" type='submit'>Рассчитать</Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
}