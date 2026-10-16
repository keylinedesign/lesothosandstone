import * as React from 'react';
/**
 * Square-edged, mono-labelled action. Primary is sand on basalt.
 * @startingPoint section="Core" subtitle="Primary, outline, dark and link buttons" viewport="700x260"
 */
export interface ButtonProps {
  variant?: 'primary'|'outline'|'dark'|'link';
  size?: 'sm'|'md'|'lg';
  /** trailing glyph; 'arrow' slides right on hover */
  icon?: 'arrow'|'none';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
