import React from 'react';
import {Formik, useFormik, useFormikContext, } from 'formik'
import {CarCard} from "./CarCard";
import {Button, InputLabel, Stack, TextField} from "@mui/material";

interface ICar {
  width: number | '',
  speed: number | '',
  acceleration: number | '',
}

const carA: ICar = {
  width: '',
  speed: '',
  acceleration: ''
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
};

const carG: ICar = {
  width: '',
  speed: '',
  acceleration: '',
};

const Xlast = 300;

const deltaAbBefore: number | '' = '';
const deltaAbAfter: number | '' = '';
const deltaGvBefore: number | '' = '';
const deltaGvAfter: number | '' = '';

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
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <form {...formik} onSubmit={formik.handleSubmit}>
        <Stack flexDirection='row' alignItems='center' gap={2}>
          <CarCard formik={formik} carName='carA' key={1}></CarCard>
          <CarCard formik={formik} carName='carB' key={2}></CarCard>
          <CarCard formik={formik} carName='carV' key={3}></CarCard>
          <CarCard formik={formik} carName='carG' key={4}></CarCard>
          <Stack flexDirection='column' gap={1}>
            <InputLabel>Расстояние между машинами А и Б до обгона:</InputLabel>
            <TextField
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