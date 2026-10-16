import React from 'react';
export function Button({variant='primary',size='md',icon='arrow',href,onClick,disabled,children,style}){
  const [h,setH]=React.useState(false);
  const pad={sm:'10px 16px',md:'16px 26px',lg:'22px 34px'}[size];
  const fs={sm:12,md:13,lg:15}[size];
  const base={display:'inline-flex',alignItems:'center',gap:14,padding:variant==='link'?'6px 0':pad,fontFamily:'var(--font-mono)',fontSize:fs,fontWeight:500,letterSpacing:'.16em',textTransform:'uppercase',border:'1px solid transparent',borderRadius:'var(--radius-0)',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.4:1,textDecoration:'none',transition:'all var(--dur-fast) var(--ease-out)',background:'none',whiteSpace:'nowrap'};
  const v={
    primary:{background:h?'var(--action-primary-hover)':'var(--action-primary)',color:'var(--text-on-accent)'},
    outline:{borderColor:h?'var(--chalk)':'var(--line-strong)',color:'var(--text-strong)',background:h?'rgba(247,247,245,.06)':'transparent'},
    dark:{background:h?'var(--earth)':'var(--basalt)',color:'var(--chalk)'},
    link:{color:h?'var(--text-strong)':'var(--text-accent)',borderBottom:'1px solid currentColor'}
  }[variant];
  const Tag=href?'a':'button';
  return <Tag href={href} onClick={disabled?undefined:onClick} disabled={disabled} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{...base,...v,...style}}>
    <span>{children}</span>
    {icon==='arrow'&&<span aria-hidden="true" style={{display:'inline-block',transform:h&&!disabled?'translateX(4px)':'none',transition:'transform var(--dur-base) var(--ease-out)'}}>→</span>}
  </Tag>;
}
