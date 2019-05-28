import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Home from './pages/home';

const Routes = createStackNavigator({
    Home,
    Main,
  });
  
  export default Routes;
  