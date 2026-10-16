/** Labelled contact rows (phones, emails, quarry). Defaults to Lesotho Stone's real details. */
export interface ContactItem { label: string; value: string; href?: string; }
export interface ContactListProps { items?: ContactItem[]; size?: 'md'|'lg'; }
export declare function ContactList(props: ContactListProps): JSX.Element;
