
import React, { Component, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image'

class LandingScreen extends Component{

    componentDidMount(){

        let that = this;
        setTimeout(function() {
            that.props.navigation.navigate('Main');
        }, 3500);

    }

    render(){

        return(
            <View style={styles.container}>
                <FastImage
                   style={{width: '100%', height: '100%'}}
                   source={{
                       uri: 'https://media3.giphy.com/media/l1uguGf2RVIsTXNDO/200.gif?cid=95b2794431a29a466ead2cba5c5a5e45e48251882f5f148d&rid=200.gif&ct=g',
                       headers: { Authorization: 'someAuthToken' },
                       priority: FastImage.priority.normal,
                   }}
                   resizeMode={FastImage.resizeMode.contain}
                />
            </View>
        );
    }
}


export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
});
