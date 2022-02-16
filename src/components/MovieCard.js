
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FastImage from 'react-native-fast-image'

export default class MovieCard extends Component{

    componentDidMount(){

    }

    render(){

        return(
            <TouchableOpacity style={styles.listContainer} onPress={ () =>{
                this.props.onPress();
            }}>

                <FastImage
                   style={{ width: 50, height: 50 }}
                   source={{
                       uri: 'https://cdn1.vectorstock.com/i/1000x1000/19/45/user-avatar-icon-sign-symbol-vector-4001945.jpg',
                       headers: { Authorization: 'someAuthToken' },
                       priority: FastImage.priority.normal,
                   }}
                   resizeMode={FastImage.resizeMode.contain}
                />

               <View style={{flexDirection: 'row', paddingLeft: 10, alignItems:'center'}}>
                  <Text>{ this.props.movieData.title }</Text>
               </View>

          </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        marginTop: 30,
        backgroundColor: 'grey',
        paddingLeft: 5,
        borderRadius: 7,
        paddingTop: 5,
        paddingBottom: 5
    }
});
