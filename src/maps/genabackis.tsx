import {MultiSelectOption} from '../components/multi-select';

export interface MapData {
    src: string;
    layers: MultiSelectOption[];
}

const genabackis: MapData = {
    src: 'genabackis-map.svg',
    layers: [
        {
            label: 'Outline',
            value: 'layer2',
        },
        {
            label: 'Cities',
            value: 'layer3',
        },
        {
            label: 'Rivers and Lakes',
            value: 'layer4',
        },
        {
            label: 'Mountains',
            value: 'layer7',
        },
        {
            label: 'Forests',
            value: 'layer6',
        },
    ],
};

export default genabackis;
