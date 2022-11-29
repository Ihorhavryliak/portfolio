import React from 'react'

import "./AnimationContact.scss";


export const AnimationContact = () => {
  const dataCircle = [];
  const countCircle = 10;
  for (let i = 1; i<= countCircle; i++) {
    dataCircle.push(i)
  }
  return (
    <>
    <div className="areas">
    <ul className="circle">
        {dataCircle.map((m)=>{
          return(
            <li key={m + 'circ'}></li>
          )
        })}
    </ul>
</div>
</>
  )
}
