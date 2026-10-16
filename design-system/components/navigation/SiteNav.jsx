import React from 'react';
import { Logo } from '../core/Logo.jsx';
export const LS_NAV=[{id:'about',label:'About Us'},{id:'products',label:'Products',children:[{id:'custom',label:'Custom Sandstone Products'},{id:'bricks',label:'Sandstone Bricks and Blocks'},{id:'cladding',label:'Sandstone Wall Cladding'}]},{id:'projects',label:'Projects'},{id:'production',label:'Production'},{id:'distribution',label:'Distribution'},{id:'contact',label:'Contact'}];
export function SiteNav({current,onNavigate=()=>{},logoSrc,solid=false,items=LS_NAV}){
  const [open,setOpen]=React.useState(null);
  const link=(a)=>({fontFamily:'var(--font-mono)',fontSize:12,letterSpacing:'.14em',textTransform:'uppercase',color:a?'var(--dune)':'var(--chalk)',cursor:'pointer',background:'none',border:'none',padding:'8px 0',borderBottom:'1px solid '+(a?'var(--dune)':'transparent')});
  return <header style={{position:'sticky',top:0,zIndex:50,display:'flex',alignItems:'center',justifyContent:'space-between',gap:24,padding:'18px var(--gutter)',background:solid?'rgba(27,27,29,.86)':'transparent',backdropFilter:solid?'blur(14px)':'none',WebkitBackdropFilter:solid?'blur(14px)':'none',borderBottom:'1px solid '+(solid?'var(--line-hairline)':'transparent'),transition:'background var(--dur-base) var(--ease-out)'}}>
    <a onClick={()=>onNavigate('home')} style={{cursor:'pointer'}}><Logo src={logoSrc} height={38}/></a>
    <nav style={{display:'flex',gap:28,alignItems:'center',flexWrap:'wrap'}}>
      {items.map(it=><div key={it.id} style={{position:'relative'}} onMouseEnter={()=>setOpen(it.children?it.id:null)} onMouseLeave={()=>setOpen(null)}>
        <button style={link(current===it.id||(it.children||[]).some(c=>c.id===current))} onClick={()=>onNavigate(it.id)}>{it.label}{it.children?' +':''}</button>
        {it.children&&open===it.id&&<div style={{position:'absolute',top:'100%',left:-20,paddingTop:12}}><div style={{background:'var(--basalt-700)',border:'1px solid var(--line-hairline)',boxShadow:'var(--shadow-float)',padding:'10px 0',minWidth:280}}>
          {it.children.map(c=><button key={c.id} onClick={()=>{setOpen(null);onNavigate(c.id)}} style={{display:'block',width:'100%',textAlign:'left',background:'none',border:'none',padding:'12px 20px',color:current===c.id?'var(--dune)':'var(--text-body)',font:'500 15px var(--font-body)',cursor:'pointer'}} onMouseEnter={e=>e.currentTarget.style.color='var(--dune)'} onMouseLeave={e=>e.currentTarget.style.color=current===c.id?'var(--dune)':'var(--text-body)'}>{c.label}</button>)}
        </div></div>}
      </div>)}
    </nav>
    <a href="tel:+27835648113" style={{fontFamily:'var(--font-mono)',fontSize:12,letterSpacing:'.1em',color:'var(--chalk)',border:'1px solid var(--line-strong)',padding:'10px 14px',whiteSpace:'nowrap'}}>083 564 8113</a>
  </header>;
}
