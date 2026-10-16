import React from 'react';
import { ImageFrame } from './ImageFrame.jsx';
export function ProjectCard({image,title,category,index,aspect='4/3',onClick}){
  const [h,setH]=React.useState(false);
  return <figure onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{margin:0,cursor:'pointer',display:'grid',gap:14}}>
    <div style={{position:'relative',aspectRatio:aspect,overflow:'hidden',background:'var(--basalt-600)'}}>
      <ImageFrame src={image} alt={title} zoom={h}/>
      <div style={{position:'absolute',inset:0,background:'var(--scrim-bottom)',opacity:h?1:0,transition:'opacity var(--dur-base) var(--ease-out)'}}></div>
      <span style={{position:'absolute',left:18,bottom:16,fontFamily:'var(--font-mono)',fontSize:12,letterSpacing:'.16em',textTransform:'uppercase',color:'var(--chalk)',opacity:h?1:0,transform:h?'none':'translateY(8px)',transition:'all var(--dur-base) var(--ease-out)'}}>View →</span>
    </div>
    <figcaption style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:16}}>
      <span style={{fontFamily:'var(--font-display)',fontWeight:900,fontVariationSettings:"'wdth' 62",textTransform:'uppercase',color:'var(--text-strong)',fontSize:22,lineHeight:1,color:h?'var(--dune)':'var(--text-strong)',transition:'color var(--dur-fast)'}}>{title}</span>
      <span style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--text-subtle)',whiteSpace:'nowrap'}}>{category}{index!=null?' · '+String(index).padStart(2,'0'):''}</span>
    </figcaption>
  </figure>;
}
