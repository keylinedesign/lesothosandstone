import React from 'react';
export function TextField({label,as='input',type='text',value,onChange,placeholder,options=[],error,rows=4,name,style}){
  const [f,setF]=React.useState(false);
  const field={width:'100%',background:'transparent',border:'none',borderBottom:'1px solid '+(error?'var(--state-error)':f?'var(--dune)':'var(--line-strong)'),color:'var(--text-strong)',font:'400 17px/1.4 var(--font-body)',padding:'10px 0 12px',outline:'none',borderRadius:0,transition:'border-color var(--dur-fast) var(--ease-out)',resize:'vertical',appearance:'none'};
  const p={name,value,onChange,placeholder,onFocus:()=>setF(true),onBlur:()=>setF(false),style:field};
  return <label style={{display:'grid',gap:6,...style}}>
    <span style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.16em',textTransform:'uppercase',color:f?'var(--text-accent)':'var(--text-muted)'}}>{label}</span>
    {as==='textarea'?<textarea rows={rows} {...p}></textarea>:as==='select'?<select {...p}><option value="" style={{background:'#1B1B1D'}}>{placeholder||'Select'}</option>{options.map(o=><option key={o} value={o} style={{background:'#1B1B1D'}}>{o}</option>)}</select>:<input type={type} {...p}/>}
    {error&&<span style={{fontSize:13,color:'var(--state-error)'}}>{error}</span>}
  </label>;
}
