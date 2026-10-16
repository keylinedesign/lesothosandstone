import * as React from 'react';
/** Tall image + condensed title + body; used for the four home pillars (Aesthetic, Structural…). */
export interface FeatureCardProps { index?: number; title: React.ReactNode; text?: React.ReactNode; image?: string; href?: string; onClick?: (e: React.MouseEvent) => void; }
export declare function FeatureCard(props: FeatureCardProps): JSX.Element;
