import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Home from './pages/home';
import List from './pages/list';

const Routes = createStackNavigator({
    Home,
    Main,
    List,
  });
  
  export default Routes;
  