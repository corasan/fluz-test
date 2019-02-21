import { createStackNavigator, createAppContainer } from 'react-navigation';

import Results from '../views/Results';
import Search from '../views/Search';

const routes = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      header: null
    }
  },
  Results: {
    screen: Results
  }
}, {
  initialRouteName: 'Search'
})

export default createAppContainer(routes);
