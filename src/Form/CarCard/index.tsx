import React, { useState } from 'react';
import { CarCardView } from "./CarCardView";
import redCar from '../../../public/assets/redCar.png';

interface ICarCard {

}

export function CarCard({formik}: ICarCard) {
  const [width, setWidth] = useState<number | ''>('');
  const [speed, setSpeed] = useState<number | ''>('');
  const [acceleration, setAcceleration] = useState<number | ''>('');

  return <CarCardView acceleration={acceleration} width={width} speed={speed} onAccelerationChange={setAcceleration} onSpeedChange={setSpeed} onWidthChange={setWidth} iconSrc={redCar} />
}