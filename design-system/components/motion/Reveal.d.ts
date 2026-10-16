import * as React from 'react';
/** Fades + lifts children into view once on scroll. */
export interface RevealProps { children?: React.ReactNode; delay?: number; y?: number; as?: string; style?: React.CSSProperties; }
export declare function Reveal(props: RevealProps): JSX.Element;
