import React from 'react';
import { ImageFrame } from './ImageFrame.jsx';
export function ProductTile({name,index,image,meta,onClick}){
  const [h,setH]=React.useState(false);
  return <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{all:'unset',cursor:'pointer',position:'relative',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:200,padding:20,background:h?'var(--dune)':'var(--surface-card)',color:h?'var(--basalt)':'var(--text-strong)',overflow:'hidden',transition:'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)'}}>
    {image&&<div style={{position:'absolute',inset:0,opacity:h?0:.35,transition:'opacity var(--dur-base) var(--ease-out)'}}><ImageFrame src={image}/></div>}
    <span style={{position:'relative',display:'flex',justifyContent:'space-between',fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.16em',textTransform:'uppercase',opacity:.8}}><span>{index!=null?String(index).padStart(2,'0'):''}</span><span>{meta}</span></span>
    <span style={{position:'relative',display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:12}}>
      <span style={{fontFamily:'var(--font-display)',fontWeight:900,fontVariationSettings:"'wdth' 62",textTransform:'uppercase',fontSize:30,lineHeight:.92}}>{name}</span>
      <span style={{fontSize:22,transform:h?'translateX(0)':'translateX(-6px)',opacity:h?1:0,transition:'all var(--dur-base) var(--ease-out)'}}>→</span>
    </span>
  </button>;
}
