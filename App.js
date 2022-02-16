
import React from 'react';
import type {Node} from 'react';
import {View} from 'react-native'


import AppNav from './src/navigation/AppNavigator.js'


export default class App extends React.Component {
    render(){
        return(
               <AppNav />
        );
    }
}
