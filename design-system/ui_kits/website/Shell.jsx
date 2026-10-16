const LSN = window.LesothoStoneDesignSystem_06b6df;
const lsDisplay = {fontFamily:'var(--font-display)',fontWeight:900,fontVariationSettings:"'wdth' 62",textTransform:'uppercase',color:'var(--text-strong)',lineHeight:.88,letterSpacing:'-.01em',margin:0};
const lsWrap = {maxWidth:'var(--max-width)',margin:'0 auto',padding:'0 var(--gutter)'};

function PageHero({crumbs,eyebrow,title,image,go,children}){
  const {Breadcrumb,Eyebrow,Reveal,Parallax,ImageFrame}=LSN;
  return <section style={{position:'relative',minHeight:image?'82vh':'auto',display:'flex',alignItems:'flex-end',marginTop:-75,paddingTop:image?0:180}}>
    {image&&<div style={{position:'absolute',inset:0}}><Parallax speed={.12} style={{height:'100%'}}><ImageFrame src={image}/></Parallax><div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(27,27,29,.55) 0%,rgba(27,27,29,.2) 40%,rgba(27,27,29,.95) 100%)'}}></div></div>}
    <div style={{...lsWrap,position:'relative',width:'100%',paddingBottom:'clamp(48px,7vw,96px)',paddingTop:image?160:0}}>
      {crumbs&&<Reveal><Breadcrumb items={crumbs} onNavigate={go}/></Reveal>}
      {eyebrow&&<Reveal delay={80} style={{marginTop:40}}><Eyebrow tone="accent">{eyebrow}</Eyebrow></Reveal>}
      <Reveal delay={160} y={60}><h1 style={{...lsDisplay,fontSize:'clamp(56px,9vw,160px)',marginTop:24,maxWidth:1300,textWrap:'balance'}}>{title}</h1></Reveal>
      {children}
    </div>
  </section>;
}

function Marquee({text='Leaders in Sandstone'}){
  const items=Array.from({length:8});
  return <div style={{overflow:'hidden',borderTop:'1px solid var(--line-hairline)',borderBottom:'1px solid var(--line-hairline)',padding:'22px 0',background:'var(--surface-sunken)'}}>
    <div className="ls-marquee" style={{display:'flex',gap:48,width:'max-content'}}>
      {[0,1].map(k=><div key={k} style={{display:'flex',gap:48}}>{items.map((_,i)=><span key={i} style={{...lsDisplay,fontSize:56,lineHeight:1,color:i%2?'transparent':'var(--dune)',WebkitTextStroke:i%2?'1px var(--sandstone)':'0',whiteSpace:'nowrap'}}>{text}</span>)}</div>)}
    </div>
  </div>;
}

function DistributorForm(){
  const {TextField,Button}=LSN;
  const [sent,setSent]=React.useState(false);
  const [v,setV]=React.useState({name:'',company:'',region:'',email:''});
  const up=k=>e=>setV({...v,[k]:e.target.value});
  if(sent) return <div style={{padding:'32px 0',display:'grid',gap:12}}><div style={{...lsDisplay,fontSize:40,color:'var(--dune)'}}>Sent</div><p style={{margin:0,color:'var(--text-muted)'}}>{v.name||'Thank you'} — {v.email}</p></div>;
  return <form onSubmit={e=>{e.preventDefault();setSent(true)}} style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'22px 28px'}}>
    <TextField label="Name" value={v.name} onChange={up('name')}/>
    <TextField label="Company Name" value={v.company} onChange={up('company')}/>
    <TextField label="Region" as="select" value={v.region} onChange={up('region')} options={window.LS_DATA.distribution.regions}/>
    <TextField label="Email Address" type="email" value={v.email} onChange={up('email')}/>
    <div><Button>Send</Button></div>
  </form>;
}

function SiteFooter({go}){
  const {ContactList,Eyebrow,Logo}=LSN;
  const D=window.LS_DATA;
  const ex=[['about','About Us'],['products','Products'],['projects','Projects'],['production','Production']];
  return <footer style={{background:'var(--surface-sunken)',paddingTop:'var(--section-y)'}}>
    <div style={{...lsWrap}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'64px var(--grid-gap)',paddingBottom:80,borderBottom:'1px solid var(--line-hairline)'}}>
        <div style={{display:'grid',gap:28,alignContent:'start'}}>
          <Eyebrow index={1}>About Us</Eyebrow>
          <p style={{margin:0,fontSize:20,lineHeight:1.45,color:'var(--text-strong)',maxWidth:440,textWrap:'pretty'}}>{D.footerAbout}</p>
          <ContactList/>
        </div>
        <div style={{display:'grid',gap:28,alignContent:'start'}}>
          <Eyebrow index={2}>Explore</Eyebrow>
          <ul style={{listStyle:'none',margin:0,padding:0,display:'grid',gap:4}}>
            {ex.map(([id,l])=><li key={id}><a onClick={()=>go(id)} style={{...lsDisplay,fontSize:48,cursor:'pointer',display:'inline-block'}} onMouseEnter={e=>e.currentTarget.style.color='var(--dune)'} onMouseLeave={e=>e.currentTarget.style.color='var(--text-strong)'}>{l}</a></li>)}
          </ul>
        </div>
        <div style={{display:'grid',gap:28,alignContent:'start'}}>
          <Eyebrow index={3}>Become a Distributor</Eyebrow>
          <DistributorForm/>
        </div>
      </div>
      <div style={{padding:'40px 0 24px',overflow:'hidden'}}>
        <div style={{...lsDisplay,fontSize:'clamp(80px,17vw,300px)',lineHeight:.8,color:'var(--basalt-600)',whiteSpace:'nowrap'}}>Lesotho Stone</div>
      </div>
      <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:16,padding:'20px 0 32px',borderTop:'var(--rule-bar) solid var(--chalk)',fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--text-subtle)'}}>
        <span>© Copyright 2022 Lesotho Stone</span>
        <span style={{display:'flex',gap:24}}><a style={{color:'var(--text-muted)'}}>Privacy Policy</a><a style={{color:'var(--text-muted)'}}>Terms &amp; Conditions</a></span>
      </div>
    </div>
  </footer>;
}

Object.assign(window,{LSN,lsDisplay,lsWrap,PageHero,Marquee,SiteFooter,DistributorForm});
