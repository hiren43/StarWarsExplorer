
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

import Api from '../../network/Api.js'
const CONSTANTS = require('../../constant/const.js')
let {height, width} = Dimensions.get('window');

let margin = 10;



 const MovieDetails = (props) => {



    const [director, setDirector] = useState([]);
    const [producers, setProducers] = useState([]);
    const [releaseDate, setReleaseDate] = useState([]);

    useEffect(() => {

        const movieData = props.navigation.state.params.movieData

       //  MovieDetails.navigationOptions = ({navigation}) => ({
       //   title: navigation.getParam('title', movieData.title),
       // })

        console.log('props: ', movieData);

        setDirector(movieData.director);
        setProducers(movieData.producer);
        setReleaseDate(movieData.release_date);

    },[]);

    return(
        <View style={styles.container}>

            <View style={styles.boxes}>
                <View style={styles.boxLeft}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.leftFontStyle}>
                        Director:
                    </Text>
                </View>
                <View style={styles.boxRight}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.rightFontStyle}>
                        {director}
                    </Text>
                </View>
            </View>

            <View style={styles.boxes}>
                <View style={styles.boxLeft}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.leftFontStyle}>
                        Producers:
                    </Text>
                </View>
                <View style={styles.boxRight}>
                    <Text numberOfLines={2} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.rightFontStyle}>
                        {producers}
                    </Text>
                </View>
            </View>

            <View style={styles.boxes}>
                <View style={styles.boxLeft}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.leftFontStyle}>
                        Release Date:
                    </Text>
                </View>
                <View style={styles.boxRight}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.rightFontStyle}>
                        {releaseDate}
                    </Text>
                </View>
            </View>


        </View>

    );

}

const styles = StyleSheet.create({

  container: {
    paddingTop: 0,
    flex: 1,
    backgroundColor: CONSTANTS.DETAIL_BG_COLOR
  },

  boxes: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10
  },

  boxLeft: {
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'transparent'
  },

  boxRight: {
      flex: 0.7,
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: 'transparent',
      paddingRight: 10
  },

  topFontStyle: {
    color: '#09DDD0',
  },

  leftFontStyle: {
    padding: 5,
    color: '#429e9a',
    color: CONSTANTS.DETAIL_LEFT_FONT_COLOR,
    fontSize: 22,
  },

  rightFontStyle: {
    padding: 5,
    color: '#2663fc',
    color: CONSTANTS.DETAIL_RIGHT_FONT_COLOR,
    fontSize: 26,
  },
});

export default MovieDetails;
