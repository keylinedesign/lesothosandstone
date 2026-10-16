import * as React from 'react';
/** Cover image that falls back to a stone-toned strata panel (with filename caption) if the photo can't load. */
export interface ImageFrameProps { src?: string; alt?: string; caption?: string; zoom?: boolean; style?: React.CSSProperties; imgStyle?: React.CSSProperties; }
export declare function ImageFrame(props: ImageFrameProps): JSX.Element;
