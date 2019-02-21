import { createStackNavigator, createAppContainer } from 'react-navigation';

import Results from '../views/Results';
import Search from '../views/Search';
import ImageDetails from '../views/ImageDetails';

const routes = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      header: null
    }
  },
  Results: {
    screen: Results
  },
  ImageDetails: {
    screen: ImageDetails
  }
}, {
  initialRouteName: 'Search'
})

export default createAppContainer(routes);
