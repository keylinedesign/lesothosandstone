The Lesotho Stone logo (only available as a JPEG). Pass a correct relative `src` to assets/logo-lesotho-stone.jpeg.
```jsx
<Logo src="../../assets/logo-lesotho-stone.jpeg" height={40} onDark />
```
onDark=true → white logo via invert + screen blend; onDark=false → original black via multiply on light grounds. Never redraw the mark.
