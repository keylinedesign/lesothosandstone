import React from 'react';
export const LS_CONTACTS=[
  {label:'Lesotho',value:'+26 5888 8889',href:'tel:+26 5888 8889'},
  {label:'National Sales and distrubition',value:'083 564 8113',href:'tel:083 564 8113'},
  {label:'Email',value:'lesothosandstone@gmail.com',href:'mailto:lesothosandstone@gmail.com'},
  {label:'Email',value:'travis.lesothostone@gmail.com',href:'mailto:travis.lesothostone@gmail.com'},
  {label:'Quarry',value:'Lokokoaneng, Berea, Lesotho'}];
export function ContactList({items=LS_CONTACTS,size='md'}){
  const fs=size==='lg'?28:18;
  return <ul style={{listStyle:'none',margin:0,padding:0,display:'grid'}}>
    {items.map((it,i)=><li key={i} style={{display:'grid',gridTemplateColumns:'minmax(120px,200px) 1fr',gap:16,alignItems:'baseline',padding:'14px 0',borderBottom:'1px solid var(--line-hairline)'}}>
      <span style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--text-subtle)'}}>{it.label}</span>
      {it.href?<a href={it.href} style={{fontSize:fs,color:'var(--text-strong)',wordBreak:'break-word'}}>{it.value}</a>:<span style={{fontSize:fs,color:'var(--text-strong)'}}>{it.value}</span>}
    </li>)}
  </ul>;
}
