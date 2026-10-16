import * as React from 'react';
/** Clipped frame whose content drifts against scroll. Child should fill (e.g. img with width/height 100%, objectFit cover). */
export interface ParallaxProps { children?: React.ReactNode; speed?: number; style?: React.CSSProperties; }
export declare function Parallax(props: ParallaxProps): JSX.Element;
