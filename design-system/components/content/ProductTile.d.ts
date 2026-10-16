/** Square-ish product index tile; flips to dune on hover. Used in product category grids. */
export interface ProductTileProps { name: string; index?: number; image?: string; meta?: string; onClick?: () => void; }
export declare function ProductTile(props: ProductTileProps): JSX.Element;
