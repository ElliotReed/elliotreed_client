export type GridElement = keyof HTMLElementTagNameMap;

export interface Grid {
    element?: GridElement;
    grid?: "page" | "column";
    customClasses?: string | string[];
    rows?: number;
    columns?: number;
}

export type GridParent = "page" | "column";

export interface GridChild {
    parentGrid: GridParent;
    element: GridElement;
    customClasses?: string[];
    style?: string;
    colStart?: number;
    colEnd?: number;
    rowStart?: number;
    rowEnd?: number;
}

export type PageGridStyle =
    "centered"
    | "full-width"
    | "without-auto-rows"
    | "with-gutter"
    | "prefered-width";
