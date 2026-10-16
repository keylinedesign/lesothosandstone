/** Mono breadcrumb trail (Home / Products / Sandstone Wall Cladding). Last item is current. */
export interface Crumb { label: string; id?: string; }
export interface BreadcrumbProps { items: Crumb[]; onNavigate?: (id: string) => void; }
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;
