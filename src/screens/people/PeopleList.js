

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  Image,
  ImageBackground,
  View,
} from 'react-native';

import FastImage from 'react-native-fast-image'

import Api from '../../network/Api.js'
import CommonStyles from '../../styles/CommonStyles.js'
import Loader from '../Loader.js'
import PeopleCard from '../../components/PeopleCard.js'
import PeopleDetails from './PeopleDetails.js'
const CONSTANTS = require('../../constant/const.js')

let isNextPageAvailable = true;
let pageNo = 1;

export default class PeopleList extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            people: [],
            isLoading: true,
            isFetching: false,
            isPageLoading: false,
        }
    }

    componentDidMount(){

        this.callGetPeopleAPI();
    }

    onEndReached(){
        console.log('onEndReached');

        if(isNextPageAvailable){
            this.setState({ isPageLoading: true });
            pageNo = pageNo + 1;
            this.callGetPeopleAPI();
        }

    }

    callGetPeopleAPI(){

        Api.getPeople(this, pageNo, function(parent, data){
            //console.log('getPeople response: ', data);
            if(data.next != null){
                isNextPageAvailable = true;
            }
            else{
                isNextPageAvailable = false
            }
            parent.setState({ people: parent.state.people.concat(data.results), isLoading: false, isFetching: false, isPageLoading: false });
        });
    }

    onRefresh() {
        console.log('onRefresh');
        pageNo = 1;
        this.setState({ isFetching: true, people: [] },() => {this.callGetPeopleAPI();});
    }

    _renderItem = ({ item: rowData, index }) => {

      return(
          <PeopleCard peopleData={rowData} onPress={() => {
              PeopleDetails.navigationOptions = ({navigation}) => ({
                  title: navigation.getParam('title', rowData.name),
              });
              this.props.navigation.navigate('PeopleDetails', { peopleData: rowData }) ;
          }} />
     );
    }

    render(){

        if(this.state.isLoading){
            return(
                <Loader />
            );
        }

        return(
            <ImageBackground source={{ uri : CONSTANTS.PEOPLE_BG_IMAGE}} style={{flex: 1, backgroundColor: 'transparent'}}>
                <FlatList
                  style={CommonStyles.FlatListContainer}
                  contentContainerStyle={{paddingBottom: 20}}
                  data={this.state.people}
                  keyExtractor={(item, index)=> index.toString()}
                  renderItem={this._renderItem}
                  onEndReachedThreshold={0.5}
                  onEndReached={this.onEndReached.bind(this)}
                  onRefresh={() => this.onRefresh()}
                  refreshing={this.state.isFetching}
                />

                {this.state.isPageLoading &&
                    <View style={{position: 'absolute', bottom: 5, width: '100%', alignItems: 'center'}}>
                        <FastImage
                           style={{width: 40, height: 40}}
                           source={{
                               uri: 'https://i.gifer.com/ZZ5H.gif',
                               headers: { Authorization: 'someAuthToken' },
                               priority: FastImage.priority.normal,
                           }}
                           resizeMode={FastImage.resizeMode.contain}
                        />
                    </View>
                }

            </ImageBackground>
        );
    }
}
