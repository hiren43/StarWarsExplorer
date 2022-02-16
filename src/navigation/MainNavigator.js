import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import PeopleList from '../screens/people/PeopleList.js';
import PeopleDetails from '../screens/people/PeopleDetails.js';

import Celeb from '../assets/people_unselected.png';
import CelebActive from '../assets/people.png'

import MovieList from '../screens/movies/MovieList.js';
import MovieDetails from '../screens/movies/MovieDetails.js';

import Movies from '../assets/film_unselected.png';
import MoviesActive from '../assets/film.png'

const tabBarIcon = (icon) => (
  <Image
    source={icon}
    size={25}
    style={{
      marginTop: 2,
      resizeMode: 'contain',
      height: 25,
      width: 25
    }}
  />
);

const PeopleStack = createStackNavigator({
  PeopleList: {
    screen: PeopleList,
    navigationOptions: () => ({
      headerTitle: 'People',
    }),
  },
  PeopleDetails: {
    screen: PeopleDetails,
  },
});

PeopleStack.navigationOptions = {
  tabBarLabel: 'People',
  tabBarOptions: { activeTintColor: '#60C4C7' },
  tabBarIcon: ({ focused }) => tabBarIcon(focused ? CelebActive : Celeb),
};

const MoviesStack = createStackNavigator({
  MovieList: {
    screen: MovieList,
    navigationOptions: () => ({
      headerTitle: 'Movies',
    }),
  },
  MovieDetails: {
    screen: MovieDetails,
  },
});

MoviesStack.navigationOptions = {
  tabBarLabel: 'Movies',
  tabBarOptions: { activeTintColor: '#60C4C7' },
  tabBarIcon: ({ focused }) => tabBarIcon(focused ? MoviesActive : Movies),
};


export default createBottomTabNavigator({
  PeopleStack,
  MoviesStack,
});
