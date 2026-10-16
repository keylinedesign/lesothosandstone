import React from 'react';
import { ImageFrame } from './ImageFrame.jsx';
export function FeatureCard({index,title,text,image,href,onClick}){
  const [h,setH]=React.useState(false);
  return <a href={href} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'grid',gap:20,color:'inherit',textDecoration:'none',cursor:'pointer'}}>
    <div style={{position:'relative',aspectRatio:'4/5',overflow:'hidden',background:'var(--basalt-600)'}}>
      <ImageFrame src={image} zoom={h} imgStyle={{filter:h?'none':'saturate(.85)'}}/>
      {index!=null&&<span style={{position:'absolute',top:16,left:16,fontFamily:'var(--font-mono)',fontSize:12,letterSpacing:'.16em',color:'var(--chalk)'}}>{String(index).padStart(2,'0')}</span>}
    </div>
    <div style={{borderTop:'1px solid '+(h?'var(--dune)':'var(--line-hairline)'),paddingTop:18,transition:'border-color var(--dur-base) var(--ease-out)'}}>
      <h3 style={{margin:'0 0 12px',fontFamily:'var(--font-display)',fontWeight:900,fontVariationSettings:"'wdth' 62",textTransform:'uppercase',color:'var(--text-strong)',fontSize:34,lineHeight:.92}}>{title}</h3>
      <p style={{margin:0,fontSize:15,lineHeight:1.6,color:'var(--text-muted)',textWrap:'pretty'}}>{text}</p>
    </div>
  </a>;
}
