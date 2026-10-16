import * as React from 'react';
/** Gallery tile for the Projects grid (Visual Square-style): image, hover zoom + scrim, title and category caption below. */
export interface ProjectCardProps { image: string; title: string; category?: string; index?: number; aspect?: string; onClick?: () => void; }
export declare function ProjectCard(props: ProjectCardProps): JSX.Element;
