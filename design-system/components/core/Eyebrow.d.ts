import * as React from 'react';
/** Small mono section label with optional index number and rule. */
export interface EyebrowProps { index?: number; tone?: 'muted'|'accent'|'dark'; children?: React.ReactNode; style?: React.CSSProperties; }
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
