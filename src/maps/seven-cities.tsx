import {MapData} from '../state';

const sevenCities: MapData = {
    src: 'seven-cities-map.svg',
    layers: [
        {
            label: 'Outline',
            value: 'layer1',
            toggledOn: true,
        },
        {
            label: 'Rivers and Lakes',
            value: 'layer3',
            toggledOn: true,
        },
    ],
};

export default sevenCities;
