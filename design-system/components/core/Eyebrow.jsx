import React from 'react';
export function Eyebrow({index,children,tone='muted',style}){
  const c=tone==='accent'?'var(--text-accent)':tone==='dark'?'var(--basalt)':'var(--text-muted)';
  return <div style={{display:'flex',alignItems:'center',gap:14,fontFamily:'var(--font-mono)',fontSize:12,letterSpacing:'.16em',textTransform:'uppercase',color:c,...style}}>
    {index!=null&&<span style={{opacity:.7}}>{String(index).padStart(2,'0')}</span>}
    <span style={{width:32,height:1,background:'currentColor',opacity:.6}}></span>
    <span>{children}</span>
  </div>;
}
