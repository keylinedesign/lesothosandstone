import * as React from 'react';
/**
 * Underline-only form field with mono label. Input, textarea or select.
 * @startingPoint section="Forms" subtitle="Become a Distributor form fields" viewport="700x260"
 */
export interface TextFieldProps {
  label: string;
  as?: 'input'|'textarea'|'select';
  type?: string; name?: string; value?: string; placeholder?: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  /** for as="select" */
  options?: string[];
  error?: string; rows?: number; style?: React.CSSProperties;
}
export declare function TextField(props: TextFieldProps): JSX.Element;
