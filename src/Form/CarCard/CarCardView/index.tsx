import {Avatar, Paper, Stack, Switch, TextField} from "@mui/material";
import React from "react";

interface ICarCardViewProps {
  iconSrc: string;
  carName: 'carA' | 'carB' | 'carV' | 'carG',
  // onWidthChange: (val: number | '') => void
  // onSpeedChange: (val: number | '') => void
  // onAccelerationChange: (val: number | '') => void

  onChangeValue: (e: React.ChangeEvent<unknown>) => void,

  width: number | '';
  speed: number | '';
  acceleration: number | '';
}

const transformValue = (str: string) => {
  if (str === '') return '';
  const num = +str;
  return isNaN(num)? 0 : num;
}

export const CarCardView = ({ iconSrc, speed, width, acceleration, onChangeValue, carName }: ICarCardViewProps) => {
  return (
    <Paper sx={{ width: 'max-content', padding: '20px' }}>
      <Switch label={{ 'aria-label': 'test' }} />
      <Stack direction='column' alignItems='center' justifyContent='space-evenly' gap={2}>
        <img src={ iconSrc } alt='car' style={{ objectFit: 'scale-down', transform: 'rotate(90deg)', height: '150px' }} />
        <TextField
          label='Габариты машины' type='number'
          inputProps={{ 'autoComplete': 'off' }}
          id={ `${carName}.width` }
          name={ `${carName}.width` }
          onChange={ onChangeValue }
          value={ width } size='small' variant='outlined'>
        </TextField>
        <TextField
          label='Скорость, км/ч' type='number'
          id={ `${carName}.speed` }
          name={ `${carName}.speed` }
          onChange={ onChangeValue }
          inputProps={{ 'autoComplete': 'off' }}
          value={ speed } size='small' variant='outlined'>
        </TextField>
        <TextField
          label='Ускорение м/с²' type='number'
          inputProps={{ 'autoComplete': 'off' }}
          id={ `${carName}.acceleration` }
          name={ `${carName}.acceleration` }
          onChange={ onChangeValue }
          value={ acceleration } size='small' variant='outlined'>
        </TextField>
      </Stack>
    </Paper>
  )
}