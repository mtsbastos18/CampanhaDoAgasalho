import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Home from './pages/home';
import Camera from './pages/camera';

const Routes = createStackNavigator({
    Home,
    Main,
    Camera
  });
  
  export default Routes;
  