import * as React from 'react';
/** Raster brand logo. onDark inverts the black-on-white JPEG and screens out the background. */
export interface LogoProps { src?: string; height?: number; onDark?: boolean; style?: React.CSSProperties; }
export declare function Logo(props: LogoProps): JSX.Element;
