import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import LandingScreen from '../screens/splash/LandingScreen';

export default createStackNavigator({
  Welcome: {
    screen: LandingScreen,
    navigationOptions: () => ({
      header: null
    }),
  },
});
