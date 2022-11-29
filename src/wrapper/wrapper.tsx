import React, { ReactNode } from 'react'
type WrapperPropsType ={
  children: ReactNode
}
export const wrapper = ({children}: WrapperPropsType) => {
  return (
    <>
    <div className="page__wrapper">
       {/*  {animationBg && <AnimationBackground />} */}
        <div className="container">
           {/*  <div id={id}
                className={`page__screen screen ${heightAuto ? 'page__auto' : ''} ${align ? 'page__align' : ''}`}>
                {children}
            </div> */}
        </div>
    </div>
</>
  )
}
