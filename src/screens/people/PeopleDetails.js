

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

 const PeopleDetails = (props) => {

    const [gender, setGender] = useState([]);
    const [height, setHeight] = useState([]);
    const [mass, setMass] = useState([]);
    const [hairColor, setHairColor] = useState([]);
    const [skinColor, setSkinColor] = useState([]);
    const [birthYear, setBirthYear] = useState([]);

    useEffect(() => {

        const peopleData = props.navigation.state.params.peopleData

        console.log('props: ', peopleData);

        setGender(peopleData.gender);
        setHeight(peopleData.height);
        setMass(peopleData.mass);
        setHairColor(peopleData.hair_color);
        setSkinColor(peopleData.skin_color);
        setBirthYear(peopleData.birth_year);

    },[]);

    return(
        <View style={styles.container}>

            <View style={styles.boxes}>
                <View style={styles.boxLeft}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.leftFontStyle}>
                        Gender:
                    </Text>
                </View>
                <View style={styles.boxRight}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.rightFontStyle}>
                        {gender}
                    </Text>
                </View>
            </View>

            <View style={styles.boxes}>
                <View style={styles.boxLeft}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.leftFontStyle}>
                        Height:
                    </Text>
                </View>
                <View style={styles.boxRight}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.rightFontStyle}>
                        {height}
                    </Text>
                </View>
            </View>

            <View style={styles.boxes}>
                <View style={styles.boxLeft}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.leftFontStyle}>
                        Mass:
                    </Text>
                </View>
                <View style={styles.boxRight}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.rightFontStyle}>
                        {mass}
                    </Text>
                </View>
            </View>

            <View style={styles.boxes}>
                <View style={styles.boxLeft}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.leftFontStyle}>
                        Hair Color:
                    </Text>
                </View>
                <View style={styles.boxRight}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.rightFontStyle}>
                    {hairColor}
                    </Text>
                </View>
            </View>

            <View style={styles.boxes}>
                <View style={styles.boxLeft}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.leftFontStyle}>
                        Skin Color:
                    </Text>
                </View>
                <View style={styles.boxRight}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.rightFontStyle}>
                        {skinColor}
                    </Text>
                </View>
            </View>

            <View style={styles.boxes}>
                <View style={styles.boxLeft}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.leftFontStyle}>
                        Birth Year:
                    </Text>
                </View>
                <View style={styles.boxRight}>
                    <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} style={styles.rightFontStyle}>
                        {birthYear}
                    </Text>
                </View>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({

  container: {
    paddingTop: 20,
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
    fontWeight: 'bold'
  },
});

export default PeopleDetails;
