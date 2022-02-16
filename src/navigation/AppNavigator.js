
import React from 'react';
import {View} from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainNavigator';
import LandingNavigator from './LandingNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Landing: LandingNavigator,
    Main: MainTabNavigator,
  }),
);
