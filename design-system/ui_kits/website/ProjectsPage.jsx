const LS_GRID=[{c:'1 / span 7',a:'4/3'},{c:'9 / span 4',a:'4/5',m:120},{c:'1 / span 4',a:'1/1'},{c:'5 / span 4',a:'4/5',m:80},{c:'9 / span 4',a:'1/1'},{c:'2 / span 5',a:'4/5'},{c:'7 / span 6',a:'16/10',m:140}];

function ProjectGrid({items,onOpen}){
  const {ProjectCard,Reveal}=LSN;
  const [w,setW]=React.useState(window.innerWidth);
  React.useEffect(()=>{const r=()=>setW(window.innerWidth);window.addEventListener('resize',r);return()=>window.removeEventListener('resize',r)},[]);
  const narrow=w<760;
  return <div style={{display:'grid',gridTemplateColumns:narrow?'1fr':'repeat(12,minmax(0,1fr))',columnGap:'var(--grid-gap)',rowGap:'clamp(48px,6vw,96px)'}}>
    {items.map((p,i)=>{const g=LS_GRID[i%LS_GRID.length];return <Reveal key={p.image} delay={(i%3)*90} style={{gridColumn:narrow?'auto':g.c,marginTop:narrow?0:(g.m||0),alignSelf:'start'}}>
      <ProjectCard image={p.image} title={p.title} category="Project" index={p.n} aspect={g.a} onClick={()=>onOpen(i)}/>
    </Reveal>})}
  </div>;
}

function Lightbox({items,index,onClose,onStep}){
  const {ImageFrame}=LSN;
  React.useEffect(()=>{const k=e=>{if(e.key==='Escape')onClose();if(e.key==='ArrowRight')onStep(1);if(e.key==='ArrowLeft')onStep(-1)};window.addEventListener('keydown',k);return()=>window.removeEventListener('keydown',k)},[onClose,onStep]);
  if(index==null)return null;const p=items[index];
  const btn={background:'none',border:'1px solid var(--line-strong)',color:'var(--chalk)',width:52,height:52,fontSize:20,cursor:'pointer'};
  return <div onClick={onClose} style={{position:'fixed',inset:0,zIndex:100,background:'rgba(18,18,19,.94)',backdropFilter:'blur(10px)',display:'grid',gridTemplateRows:'1fr auto',padding:'clamp(16px,4vw,48px)',gap:20,animation:'lsFade .4s var(--ease-out)'}}>
    <div onClick={e=>e.stopPropagation()} style={{minHeight:0}}><ImageFrame key={p.image} src={p.image} imgStyle={{objectFit:'contain'}} style={{background:'transparent'}}/></div>
    <div onClick={e=>e.stopPropagation()} style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:20,flexWrap:'wrap'}}>
      <div><div style={{...lsDisplay,fontSize:40}}>{p.title}</div><div className="ls-label" style={{marginTop:8}}>{p.cat} · {String(p.n).padStart(2,'0')}</div></div>
      <div style={{display:'flex',alignItems:'center',gap:16}}>
        <button style={btn} onClick={()=>onStep(-1)}>←</button>
        <span className="ls-label" style={{color:'var(--text-strong)',minWidth:70,textAlign:'center'}}>{index+1} - {items.length}</span>
        <button style={btn} onClick={()=>onStep(1)}>→</button>
        <button style={{...btn,marginLeft:12}} onClick={onClose}>✕</button>
      </div>
    </div>
  </div>;
}

function ProjectsPage({go}){
  const {FilterTabs}=LSN;const D=window.LS_DATA;
  const [cat,setCat]=React.useState('All');const [open,setOpen]=React.useState(null);
  const items=cat==='All'?D.projects:D.projects.filter(p=>p.cat===cat);
  const counts=Object.fromEntries(D.projectFilters.map(f=>[f,f==='All'?D.projects.length:D.projects.filter(p=>p.cat===f).length]));
  return <>
    <PageHero go={go} crumbs={[{label:'Home',id:'home'},{label:'Projects'}]} eyebrow={D.projectsIntro.eyebrow} title={D.projectsIntro.title}/>
    <section style={{...lsWrap,paddingBottom:'var(--section-y)'}}>
      <div style={{position:'sticky',top:75,zIndex:5,background:'var(--surface-page)',marginBottom:64}}><FilterTabs options={D.projectFilters} value={cat} onChange={setCat} counts={counts}/></div>
      <ProjectGrid key={cat} items={items} onOpen={setOpen}/>
    </section>
    <Lightbox items={items} index={open} onClose={()=>setOpen(null)} onStep={d=>setOpen(i=>(i+d+items.length)%items.length)}/>
  </>;
}

Object.assign(window,{ProjectGrid,Lightbox,ProjectsPage});
