import React from 'react'

import "./AnimationCircle.scss";


export const AnimationCircle = () => {
  const dataCircle = [];
  const countCircle = 10;
  for (let i = 1; i<= countCircle; i++) {
    dataCircle.push(i)
  }
  return (
    <div className="area">
    <ul className="circles">
        {dataCircle.map((m, i)=>{
          return(
            <li key={i + 'circles'}></li>
          )
        })}
    </ul>
</div>
  )
}
