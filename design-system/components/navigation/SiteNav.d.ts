/**
 * Sticky site header: logo, mono nav with Products dropdown, phone pill. Transparent over hero, solid+blur on scroll.
 * @startingPoint section="Navigation" subtitle="Site header with Products dropdown" viewport="1280x120"
 */
export interface NavItem { id: string; label: string; children?: NavItem[]; }
export interface SiteNavProps { current?: string; onNavigate?: (id: string) => void; logoSrc?: string; solid?: boolean; items?: NavItem[]; }
export declare function SiteNav(props: SiteNavProps): JSX.Element;
