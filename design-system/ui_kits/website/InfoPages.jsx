function AboutPage({go}){
  const {Reveal,ImageFrame,Eyebrow,Button}=LSN;const A=window.LS_DATA.about;
  return <>
    <PageHero go={go} crumbs={[{label:'Home',id:'home'},{label:'About Us'}]} title="About Us" image={window.LS_DATA.home.features[3].image}/>
    <section style={{...lsWrap,padding:'var(--section-y) var(--gutter)',display:'grid',gap:'var(--section-y)'}}>
      <Reveal><p style={{...lsDisplay,fontSize:'clamp(32px,3.6vw,60px)',lineHeight:1.02,maxWidth:1200,textWrap:'pretty'}}>{A[0]}</p></Reveal>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,300px),1fr))',gap:'48px var(--grid-gap)',alignItems:'start'}}>
        <Reveal style={{display:'grid',gap:20}}><div style={{...lsDisplay,fontSize:'clamp(80px,11vw,200px)',color:'var(--dune)'}}>200,000</div><div className="ls-label">square meters · annually</div></Reveal>
        <div style={{display:'grid',gap:28}}>{A.slice(1).map((p,i)=><Reveal key={i} delay={i*100}><div style={{display:'grid',gridTemplateColumns:'48px 1fr',gap:16,paddingTop:20,borderTop:'1px solid var(--line-hairline)'}}><span className="ls-label">{String(i+1).padStart(2,'0')}</span><p style={{margin:0,fontSize:18,lineHeight:1.6}}>{p}</p></div></Reveal>)}</div>
      </div>
      <div style={{display:'flex',gap:16,flexWrap:'wrap'}}><Button onClick={()=>go('products')}>Products</Button><Button variant="outline" onClick={()=>go('production')}>Production</Button></div>
    </section>
  </>;
}

function ProductionPage({go}){
  const {Reveal,ImageFrame,Parallax,Button}=LSN;const D=window.LS_DATA;const f=D.home.features[3];
  return <>
    <PageHero go={go} crumbs={[{label:'Home',id:'home'},{label:'Production'}]} eyebrow={f.title} title="Production"/>
    <Parallax speed={.15} style={{height:'70vh'}}><ImageFrame src={f.image}/></Parallax>
    <section style={{...lsWrap,padding:'var(--section-y) var(--gutter)',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,380px),1fr))',gap:'48px var(--space-8)'}}>
      <Reveal><p style={{...lsDisplay,fontSize:'clamp(32px,3.4vw,56px)',lineHeight:1.02}}>{f.text}</p></Reveal>
      <Reveal delay={120} style={{display:'grid',gap:24,alignContent:'start'}}><p style={{margin:0,fontSize:18,lineHeight:1.6}}>{D.about[1]}</p><p style={{margin:0,fontSize:18,lineHeight:1.6}}>{D.about[2]}</p><div><Button variant="outline" onClick={()=>go('custom')}>Custom Sandstone Products</Button></div></Reveal>
    </section>
  </>;
}

function DistributionPage({go}){
  const {Reveal,ImageFrame,Eyebrow,Button}=LSN;const D=window.LS_DATA,X=D.distribution;
  return <>
    <PageHero go={go} crumbs={[{label:'Home',id:'home'},{label:'Distribution'}]} title="Distribution">
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,360px),1fr))',gap:'24px var(--space-8)',marginTop:48}}>
        <Reveal delay={250}><p style={{margin:0,fontSize:20,lineHeight:1.45,color:'var(--text-strong)'}}>{X.p1}</p></Reveal>
        <Reveal delay={350}><p style={{margin:0,fontSize:17,lineHeight:1.6}}>{X.p2}</p></Reveal>
      </div>
    </PageHero>
    <section style={{background:'var(--surface-earth)'}}>
      <div style={{...lsWrap,padding:'var(--section-y) var(--gutter)',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,420px),1fr))',gap:'var(--space-8)',alignItems:'center'}}>
        <div style={{display:'grid',gap:32}}>
          <Eyebrow tone="accent">{X.eyebrow}</Eyebrow>
          <h2 style={{...lsDisplay,fontSize:'clamp(40px,4.5vw,72px)'}}>{X.footTitle}</h2>
          <ol style={{listStyle:'none',margin:0,padding:0}}>{X.regions.map((r,i)=><Reveal as="li" key={r} delay={i*80} style={{display:'grid',gridTemplateColumns:'56px 1fr',alignItems:'baseline',padding:'14px 0',borderBottom:'1px solid rgba(247,247,245,.16)'}}><span className="ls-label" style={{color:'var(--dune)'}}>{String(i+1).padStart(2,'0')}</span><span style={{...lsDisplay,fontSize:'clamp(32px,3.4vw,52px)'}}>{r}</span></Reveal>)}</ol>
        </div>
        <Reveal delay={150}><div style={{aspectRatio:'1/1'}}><ImageFrame src={D.home.map} caption="LS Map" imgStyle={{objectFit:'contain'}}/></div></Reveal>
      </div>
    </section>
    <section style={{...lsWrap,padding:'var(--section-y) var(--gutter)',display:'grid',gap:40}}>
      <Reveal><p style={{margin:0,fontSize:'clamp(22px,2vw,30px)',lineHeight:1.35,color:'var(--text-strong)',maxWidth:900}}>{X.p3}</p></Reveal>
      <div><Button onClick={()=>go('contact')}>Contact Us</Button></div>
    </section>
  </>;
}

function ContactPage({go}){
  const {ContactList,TextField,Button,Eyebrow,Reveal}=LSN;
  const [sent,setSent]=React.useState(false);
  return <>
    <PageHero go={go} crumbs={[{label:'Home',id:'home'},{label:'Contact'}]} title="Contact"/>
    <section style={{...lsWrap,paddingBottom:'var(--section-y)',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,400px),1fr))',gap:'64px var(--space-8)'}}>
      <Reveal><ContactList size="lg"/></Reveal>
      <Reveal delay={120} style={{background:'var(--surface-card)',padding:'clamp(28px,4vw,56px)',display:'grid',gap:32,alignContent:'start'}}>
        <h2 style={{...lsDisplay,fontSize:56}}>Leave a message</h2>
        {sent?<p style={{margin:0,color:'var(--dune)',fontSize:18}}>Sent.</p>:<form onSubmit={e=>{e.preventDefault();setSent(true)}} style={{display:'grid',gap:24}}>
          <TextField label="Name"/><TextField label="Email Address" type="email"/><TextField label="Message" as="textarea"/>
          <div><Button>Send</Button></div>
        </form>}
      </Reveal>
    </section>
  </>;
}
Object.assign(window,{AboutPage,ProductionPage,DistributionPage,ContactPage});
