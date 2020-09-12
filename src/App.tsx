import React from 'react';
import genabackis from './maps/genabackis';
import MapController from './components/map-controller';

function App(): JSX.Element {
    return <MapController data={genabackis} />;
}

export default App;
