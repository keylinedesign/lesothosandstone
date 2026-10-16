function HomePage({go}){
  const {Button,Eyebrow,FeatureCard,Reveal,Parallax,ImageFrame}=LSN;const D=window.LS_DATA,H=D.home;
  const [open,setOpen]=React.useState(null);
  const preview=[0,6,24,30,36,41,8].map(i=>D.projects[i]);
  const words=H.title.split(' ');
  return <>
    <section style={{position:'relative',minHeight:'100vh',display:'flex',alignItems:'flex-end',marginTop:-75,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0}}><Parallax speed={.2} style={{height:'100%'}}><ImageFrame src={H.features[0].image}/></Parallax>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(27,27,29,.7) 0%,rgba(27,27,29,.25) 35%,rgba(27,27,29,.96) 100%)'}}></div></div>
      <div style={{...lsWrap,position:'relative',width:'100%',paddingBottom:'clamp(48px,6vw,88px)',paddingTop:160}}>
        <h1 style={{...lsDisplay,fontSize:'clamp(52px,8.4vw,150px)',maxWidth:1400}}>
          {words.map((w,i)=><span key={i} style={{display:'inline-block',overflow:'hidden',verticalAlign:'top',paddingBottom:'.04em'}}><span className="ls-word" style={{display:'inline-block',animationDelay:(200+i*55)+'ms',color:/sandstone|earth/i.test(w)?'var(--dune)':undefined}}>{w}&nbsp;</span></span>)}
        </h1>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:32,flexWrap:'wrap',marginTop:48,paddingTop:28,borderTop:'1px solid var(--line-strong)'}}>
          <Reveal delay={900}><p style={{margin:0,fontSize:'clamp(18px,1.6vw,22px)',lineHeight:1.4,color:'var(--text-strong)',maxWidth:520}}>{H.sub}</p></Reveal>
          <Reveal delay={1050}><Button size="lg" onClick={()=>go('about')}>Learn More</Button></Reveal>
        </div>
      </div>
    </section>
    <Marquee/>
    <section style={{...lsWrap,padding:'var(--section-y) var(--gutter)'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'64px var(--grid-gap)'}}>
        {H.features.map((f,i)=><Reveal key={f.title} delay={i*120} style={{marginTop:window.innerWidth>900?[0,96,0,96][i]:0}}><FeatureCard index={i+1} title={f.title} text={f.text} image={f.image} onClick={()=>go(f.to)}/></Reveal>)}
      </div>
    </section>
    <section style={{background:'var(--surface-earth)',position:'relative',overflow:'hidden'}}>
      <div style={{...lsWrap,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,420px),1fr))',gap:'var(--space-8)',padding:'var(--section-y) var(--gutter)',alignItems:'center'}}>
        <div style={{display:'grid',gap:32}}>
          <Reveal><Eyebrow tone="accent">{H.distEyebrow}</Eyebrow></Reveal>
          <Reveal delay={100}><h2 style={{...lsDisplay,fontSize:'clamp(44px,5.4vw,92px)',textWrap:'balance'}}>{H.distTitle}</h2></Reveal>
          <Reveal delay={200}><p style={{margin:0,fontSize:18,lineHeight:1.6,color:'var(--ash)',maxWidth:520}}>{H.distText}</p></Reveal>
          <Reveal delay={300}><Button variant="outline" onClick={()=>go('distribution')}>Become a Distributor</Button></Reveal>
        </div>
        <Reveal delay={200}><div style={{aspectRatio:'1/1'}}><ImageFrame src={H.map} caption="LS Map — Homepage" imgStyle={{objectFit:'contain'}}/></div></Reveal>
      </div>
    </section>
    <section style={{...lsWrap,padding:'var(--section-y) var(--gutter)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:24,flexWrap:'wrap',marginBottom:72}}>
        <Reveal><h2 style={{...lsDisplay,fontSize:'clamp(64px,10vw,180px)'}}>Our<br/>Projects</h2></Reveal>
        <Reveal delay={150}><Button variant="link" onClick={()=>go('projects')}>See more</Button></Reveal>
      </div>
      <ProjectGrid items={preview} onOpen={setOpen}/>
    </section>
    <Lightbox items={preview} index={open} onClose={()=>setOpen(null)} onStep={d=>setOpen(i=>(i+d+preview.length)%preview.length)}/>
  </>;
}
Object.assign(window,{HomePage});
