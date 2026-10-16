import React from 'react';
export function Logo({src='assets/logo-lesotho-stone.jpeg',height=44,onDark=true,style}){
  return <img src={src} alt="Lesotho Stone — Leaders in Sandstone" style={{height,width:'auto',display:'block',filter:onDark?'invert(1)':'none',mixBlendMode:onDark?'screen':'multiply',...style}}/>;
}
