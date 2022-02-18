
import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import FastImage from 'react-native-fast-image'

import CommonStyles from '../styles/CommonStyles.js'

import rightArrow from '../assets/right_arrow.png'

export default class PeopleCard extends Component{

    componentDidMount(){

    }

    render(){

        return(
            <TouchableOpacity style={CommonStyles.peopleCardContainer} onPress={ () =>{
                this.props.onPress();
            }}>

                <FastImage
                   style={{ width: 50, height: 50 }}
                   source={{
                       uri: 'https://img.favpng.com/17/3/18/computer-icons-user-profile-male-png-favpng-ZmC9dDrp9x27KFnnge0jKWKBs.jpg',
                       headers: { Authorization: 'someAuthToken' },
                       priority: FastImage.priority.normal,
                   }}
                   resizeMode={FastImage.resizeMode.contain}
                />

               <View style={{flex: 1, flexDirection: 'row', paddingLeft: 10, paddingRight: 20, alignItems:'center'}}>
                  <Text style={{color: '#000000', fontSize: 18, marginRight: 20}}>{ this.props.peopleData.name } </Text>
                  <Image source={rightArrow} style={{ position: 'absolute', right: 10, width: 30, height: 30}} />
               </View>

          </TouchableOpacity>
        );
    }
}
