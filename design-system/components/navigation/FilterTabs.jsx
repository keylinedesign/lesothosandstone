import React from 'react';
export function FilterTabs({options=[],value,onChange=()=>{},counts}){
  return <div role="tablist" style={{display:'flex',flexWrap:'wrap',gap:'8px 28px',borderBottom:'1px solid var(--line-hairline)'}}>
    {options.map(o=>{const a=o===value;return <button key={o} role="tab" aria-selected={a} onClick={()=>onChange(o)} style={{background:'none',border:'none',cursor:'pointer',padding:'14px 0',marginBottom:-1,borderBottom:'2px solid '+(a?'var(--dune)':'transparent'),fontFamily:'var(--font-mono)',fontSize:12,letterSpacing:'.14em',textTransform:'uppercase',color:a?'var(--text-strong)':'var(--text-muted)',transition:'color var(--dur-fast)'}}>{o}{counts&&counts[o]!=null&&<sup style={{marginLeft:6,color:'var(--text-subtle)'}}>{counts[o]}</sup>}</button>})}
  </div>;
}
