import React from 'react';
import { createAppContainer } from 'react-navigation';
import { MapView } from 'react-native-maps'
import Routes from './routes';

const App = createAppContainer(Routes);

export default App;