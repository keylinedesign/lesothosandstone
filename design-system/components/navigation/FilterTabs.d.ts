/** Underlined mono filter tabs — Projects gallery categories. */
export interface FilterTabsProps { options: string[]; value?: string; onChange?: (v: string) => void; counts?: Record<string, number>; }
export declare function FilterTabs(props: FilterTabsProps): JSX.Element;
