import {Avatar, Paper, Stack, TextField} from "@mui/material";
import React from "react";

interface ICarCardViewProps {
  iconSrc: string;

  onWidthChange: (val: number | '') => void
  onSpeedChange: (val: number | '') => void
  onAccelerationChange: (val: number | '') => void

  width: number | '';
  speed: number | '';
  acceleration: number | '';
}

const transformValue = (str: string) => {
  if (str === '') return '';
  const num = +str;
  return isNaN(num)? 0 : num;
}

export const CarCardView = ({ iconSrc, speed, width, acceleration, onWidthChange, onSpeedChange, onAccelerationChange }: ICarCardViewProps) => {
  return (
    <Paper sx={{ width: 'max-content', padding: '20px' }}>
      <Stack direction='column' alignItems='center' justifyContent='space-evenly' gap={2}>
        <img src={ iconSrc } alt='car' style={{ objectFit: 'scale-down', transform: 'rotate(90deg)', height: '150px' }} />
        <TextField
          label='Габариты машины' type='number'
          inputProps={{ 'autocomplete': 'off' }}
          onChange={ (e) => onWidthChange(transformValue(e.target.value)) }
          value={ width } size='small' variant='outlined'>
        </TextField>
        <TextField
          label='Скорость, км/ч' type='number'
          inputProps={{ 'autocomplete': 'off' }}
          onChange={ (e) => onSpeedChange(transformValue(e.target.value)) }
          value={ speed } size='small' variant='outlined'>
        </TextField>
        <TextField
          label='Ускорение м/с²' type='number'
          inputProps={{ 'autocomplete': 'off' }}
          onChange={ (e) => onAccelerationChange(transformValue(e.target.value)) }
          value={ acceleration } size='small' variant='outlined'>
        </TextField>
      </Stack>
    </Paper>
  )
}