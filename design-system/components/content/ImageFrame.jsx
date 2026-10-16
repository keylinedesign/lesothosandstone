import React from 'react';
const TONES=['#A79581','#8A7863','#625140','#C9BCA4','#47362A','#7F776D','#ABA398'];
function hash(s){let h=0;for(let i=0;i<(s||'').length;i++)h=(h*31+s.charCodeAt(i))|0;return Math.abs(h);}
export function ImageFrame({src,alt='',caption,zoom=false,style,imgStyle}){
  const [failed,setFailed]=React.useState(!src);
  const tone=TONES[hash(src||caption)%TONES.length];
  const name=caption||(src?decodeURIComponent(src.split('/').pop().replace(/\.(jpe?g|png|webp)$/i,'').replace(/[-_.]/g,' ')):'Image');
  return <div style={{position:'relative',overflow:'hidden',background:tone,width:'100%',height:'100%',...style}}>
    {failed?<div style={{position:'absolute',inset:0,backgroundImage:'repeating-linear-gradient(172deg,rgba(255,255,255,.07) 0 1px,transparent 1px 22px),repeating-linear-gradient(176deg,rgba(0,0,0,.08) 0 2px,transparent 2px 57px)',display:'flex',alignItems:'flex-end',padding:14}}>
      <span style={{fontFamily:'var(--font-mono)',fontSize:10,letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(27,27,29,.7)',background:'rgba(247,247,245,.35)',padding:'4px 6px'}}>{name}</span>
    </div>:<img src={src} alt={alt} loading="lazy" onError={()=>setFailed(true)} style={{width:'100%',height:'100%',objectFit:'cover',display:'block',transform:zoom?'scale(1.06)':'scale(1)',transition:'transform 1.4s var(--ease-out), filter var(--dur-slow) var(--ease-out)',...imgStyle}}/>}
  </div>;
}
