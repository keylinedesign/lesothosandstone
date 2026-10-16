const LS_CAT_ORDER=['custom','cladding','bricks'];

function ProductsOverview({go}){
  const {Reveal,ImageFrame,Eyebrow}=LSN;const D=window.LS_DATA;
  return <>
    <PageHero go={go} crumbs={[{label:'Home',id:'home'},{label:'Products'}]} title="Products"/>
    <section style={{...lsWrap,paddingBottom:'var(--section-y)'}}>
      {LS_CAT_ORDER.map((id,i)=>{const c=D.categories[id];return <CategoryRow key={id} index={i+1} id={id} c={c} go={go}/>})}
    </section>
  </>;
}

function CategoryRow({index,id,c,go}){
  const {Reveal,ImageFrame,Eyebrow,Button}=LSN;const [h,setH]=React.useState(false);
  return <Reveal style={{borderTop:'var(--rule-bar) solid var(--chalk)',padding:'40px 0 80px'}}>
    <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,380px),1fr))',gap:'40px var(--grid-gap)'}}>
      <div style={{display:'grid',gap:28,alignContent:'start'}}>
        <Eyebrow index={index} tone="accent">{c.products.length} products</Eyebrow>
        <h2 onClick={()=>go(id)} style={{...lsDisplay,fontSize:'clamp(48px,6vw,104px)',cursor:'pointer',color:h?'var(--dune)':'var(--text-strong)',transition:'color var(--dur-base)'}}>{c.name}</h2>
        <ul style={{listStyle:'none',margin:0,padding:0,columns:'2 200px',columnGap:24}}>
          {c.products.map(p=><li key={p} style={{breakInside:'avoid',padding:'8px 0',borderBottom:'1px solid var(--line-hairline)'}}><a onClick={()=>go('product:'+id+':'+p)} style={{cursor:'pointer',color:'var(--text-body)',fontSize:15}} onMouseEnter={e=>e.currentTarget.style.color='var(--dune)'} onMouseLeave={e=>e.currentTarget.style.color='var(--text-body)'}>{p}</a></li>)}
        </ul>
        <div><Button variant="link" onClick={()=>go(id)}>View range</Button></div>
      </div>
      <div onClick={()=>go(id)} style={{aspectRatio:'5/4',cursor:'pointer'}}><ImageFrame src={c.image} zoom={h}/></div>
    </div>
  </Reveal>;
}

function CategoryPage({id,go}){
  const {ProductTile,Reveal}=LSN;const c=window.LS_DATA.categories[id];
  return <>
    <PageHero go={go} crumbs={[{label:'Home',id:'home'},{label:'Products',id:'products'},{label:c.name}]} title={c.name} image={c.image}>
      <p style={{margin:'32px 0 0',fontSize:20,lineHeight:1.45,color:'var(--text-strong)',maxWidth:560}}>{c.blurb}</p>
    </PageHero>
    <section style={{...lsWrap,padding:'var(--space-8) var(--gutter) var(--section-y)'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:2}}>
        {c.products.map((p,i)=>{const s=window.LS_DATA.specs[p];return <Reveal key={p} delay={(i%4)*70}><ProductTile index={i+1} name={p} meta={s?s.format:''} onClick={()=>go('product:'+id+':'+p)}/></Reveal>})}
      </div>
    </section>
  </>;
}

function ProductPage({cat,name,go}){
  const {SpecGrid,Reveal,ImageFrame,Eyebrow,Button}=LSN;const D=window.LS_DATA;const c=D.categories[cat];const s=D.specs[name];
  const i=c.products.indexOf(name);const next=c.products[(i+1)%c.products.length];
  return <>
    <PageHero go={go} crumbs={[{label:'Home',id:'home'},{label:'Products',id:'products'},{label:c.name,id:cat},{label:name}]} eyebrow={c.name+' Products'} title={name}/>
    <section style={{...lsWrap,paddingBottom:'var(--section-y)',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,320px),1fr))',gap:'64px var(--space-8)'}}>
      <div style={{gridColumn:'span 2',display:'grid',gap:48,minWidth:0}}>
        <Reveal><div style={{aspectRatio:'16/10'}}><ImageFrame src={c.image} caption={name}/></div></Reveal>
        {s&&<Reveal delay={100}><SpecGrid {...s}/></Reveal>}
        <Reveal delay={150}><p style={{margin:0,fontSize:20,lineHeight:1.5,color:'var(--text-strong)',maxWidth:640}}>{c.blurb}</p></Reveal>
        <div style={{display:'flex',gap:16,flexWrap:'wrap'}}><Button onClick={()=>go('contact')}>Contact</Button><Button variant="outline" onClick={()=>go('product:'+cat+':'+next)}>{next}</Button></div>
      </div>
      <aside style={{display:'grid',gap:20,alignContent:'start',position:'sticky',top:110}}>
        <Eyebrow>{c.name} Products</Eyebrow>
        <ul style={{listStyle:'none',margin:0,padding:0}}>
          {c.products.map(p=><li key={p}><a onClick={()=>go('product:'+cat+':'+p)} style={{display:'flex',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid var(--line-hairline)',cursor:'pointer',fontSize:15,color:p===name?'var(--dune)':'var(--text-body)'}}><span>{p}</span><span>{p===name?'●':''}</span></a></li>)}
        </ul>
      </aside>
    </section>
  </>;
}
Object.assign(window,{ProductsOverview,CategoryPage,ProductPage});
