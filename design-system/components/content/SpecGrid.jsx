import React from 'react';
export function SpecGrid({format,size,unitsPerM2,m2PerPallet}){
  const rows=[['Format',format],['Size',size],['Units per M2',unitsPerM2],['M2 per pallet',m2PerPallet]];
  return <dl style={{margin:0,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',borderTop:'1px solid var(--line-strong)'}}>
    {rows.map(([k,v],i)=><div key={k} style={{padding:'18px 20px 22px 0',borderBottom:'1px solid var(--line-hairline)',display:'grid',gap:10}}>
      <dt style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.16em',textTransform:'uppercase',color:'var(--text-muted)'}}>{k}</dt>
      <dd style={{margin:0,fontFamily:'var(--font-display)',fontWeight:900,fontVariationSettings:"'wdth' 62",textTransform:'uppercase',color:'var(--text-strong)',fontSize:36,lineHeight:.95}}>{v??'—'}</dd>
    </div>)}
  </dl>;
}
