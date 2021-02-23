export interface ToggleableSvgLayer {
    label: string;
    value: string;
    toggledOn: boolean;
}

export interface MapData {
    src: string;
    layers: ToggleableSvgLayer[];
}
