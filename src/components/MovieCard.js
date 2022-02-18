
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import FastImage from 'react-native-fast-image'
import CommonStyles from '../styles/CommonStyles.js'

import movieImage from '../assets/movie.png'

export default class MovieCard extends Component{

    componentDidMount(){

    }

    render(){

        return(
            <TouchableOpacity style={CommonStyles.movieCardContainer} onPress={ () =>{
                this.props.onPress();
            }}>

                <FastImage
                   style={{ width: 50, height: 50, padding: 30 }}
                   source={movieImage}
                   resizeMode={FastImage.resizeMode.contain}
                />

               <View style={{paddingLeft: 10}}>
                  <Text style={{color: 'black', fontSize: 24}}>{ this.props.movieData.title }</Text>
                  <View style={{flexDirection: 'row', marginTop: 5, backgroundColor: 'transparent'}}>
                    <Text style={{color: 'black', fontSize: 16}}>Director: </Text>
                    <Text style={{color: 'black', fontSize: 16}}>{ this.props.movieData.director }</Text>
                  </View>
               </View>

          </TouchableOpacity>
        );
    }
}
