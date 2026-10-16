Scroll reveal (fade + 40px lift, 1200ms expo-out) and Parallax image frame — the brand's "expressive" motion.
```jsx
<Reveal delay={120}><h2>…</h2></Reveal>
<Parallax speed={.15} style={{height:600}}><img src="…" style={{width:'100%',height:'100%',objectFit:'cover'}}/></Parallax>
```
Stagger siblings by 80–120ms. Keep parallax speed between .08 and .2.
