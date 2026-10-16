import React from 'react';
export function Breadcrumb({items=[],onNavigate=()=>{}}){
  return <nav style={{display:'flex',gap:10,flexWrap:'wrap',fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.14em',textTransform:'uppercase'}}>
    {items.map((it,i)=><React.Fragment key={i}>{i>0&&<span style={{color:'var(--text-subtle)'}}>/</span>}{it.id&&i<items.length-1?<a onClick={()=>onNavigate(it.id)} style={{cursor:'pointer',color:'var(--text-muted)'}}>{it.label}</a>:<span style={{color:'var(--text-accent)'}}>{it.label}</span>}</React.Fragment>)}
  </nav>;
}
