

import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  View,
} from 'react-native';

import Api from '../../network/Api.js'
import CommonStyles from '../../styles/CommonStyles.js'
import MovieCard from '../../components/MovieCard.js'
import Loader from '../Loader.js'
import MovieDetails from './MovieDetails.js'
const CONSTANTS = require('../../constant/const.js')

export default class MovieList extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            movie: [],
            isLoading: true,
        }
    }

    componentDidMount(){

        Api.getMovies(this, function(parent, data){
            //console.log('getMovies response: ', data);
            parent.setState({movie: data.results, isLoading: false});
        });
    }

    _renderItem = ({ item: rowData, index }) => {

      return(
          <MovieCard movieData={rowData} onPress={() => {
              MovieDetails.navigationOptions = ({navigation}) => ({
                  title: navigation.getParam('title', rowData.title),
              });
              this.props.navigation.navigate('MovieDetails', { movieData: rowData });
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
            <ImageBackground source={{ uri : CONSTANTS.MOVIE_BG_IMAGE}} style={{flex: 1, backgroundColor: 'transparent'}}>
                <FlatList
                  style={CommonStyles.FlatListContainer}
                  contentContainerStyle={{paddingBottom: 30}}
                  data={this.state.movie}
                  keyExtractor={(item, index)=> index.toString()}
                  renderItem={this._renderItem}
                />
            </ImageBackground>
        );
    }
}
