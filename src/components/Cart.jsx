import React from 'react'
import { WiCloudyWindy ,WiRain } from "react-icons/wi";

const Cart = () => {
  return (
    <div className='d-flex flex-column align-items-center gap-2 mt-3'>
      <p>Jul 28, 10:43pm</p>
      <h2>Yangon, MM</h2>
      <h1><WiCloudyWindy/>27°C</h1>
      <p><WiRain/>2.4m/s SW</p>
      <p>Humidity:85%</p>
      <p>Dew point:25°C</p>
      <p>Visibility:10.0km</p>
    </div>
  )
}

export default Cart