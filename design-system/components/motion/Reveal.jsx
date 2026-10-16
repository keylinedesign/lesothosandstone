import React from 'react';
export function Reveal({children,delay=0,y=40,as='div',style}){
  const ref=React.useRef(null);const [on,setOn]=React.useState(false);
  React.useEffect(()=>{const el=ref.current;if(!el)return;
    if(!('IntersectionObserver' in window)){setOn(true);return;}
    const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setOn(true);io.disconnect();}},{threshold:.12,rootMargin:'0px 0px -5% 0px'});io.observe(el);return()=>io.disconnect();},[]);
  const Tag=as;
  return <Tag ref={ref} style={{opacity:on?1:0,transform:on?'none':'translateY('+y+'px)',transition:'opacity var(--dur-reveal) var(--ease-out) '+delay+'ms, transform var(--dur-reveal) var(--ease-out) '+delay+'ms',...style}}>{children}</Tag>;
}
export function Parallax({children,speed=.15,style}){
  const ref=React.useRef(null);const [o,setO]=React.useState(0);
  React.useEffect(()=>{let raf;const tick=()=>{const el=ref.current;if(el){const r=el.getBoundingClientRect();const c=r.top+r.height/2-window.innerHeight/2;setO(-c*speed);}raf=requestAnimationFrame(tick);};raf=requestAnimationFrame(tick);return()=>cancelAnimationFrame(raf);},[speed]);
  return <div ref={ref} style={{overflow:'hidden',position:'relative',...style}}><div style={{position:'absolute',inset:'-12% 0',transform:'translate3d(0,'+o+'px,0)',willChange:'transform'}}>{children}</div></div>;
}
