// Api.js
import {
    Alert,
} from 'react-native';
import {checkIntenetStatus,internetConnectionTitle,internetConnectionMessage} from '../constant/const.js';
import ApiUtils from './ApiUtils.js';


var API_ENDPOINT = 'https://swapi.dev/api/';

var fetchGetData = function(url, callback) {
    if(checkIntenetStatus){
      fetch(url, {
              method: 'GET',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
              },
          })
          .then(ApiUtils.checkStatus)
          .then(response => response.json())
          .then((response) => {
              out = response;
              callback(undefined, out);
          })
          .catch(e => {
            console.log('Error : ', JSON.stringify(e));
              callback(e);
          })
    }else{
      var data = {error : '1'}
      callback(undefined,data);
      setTimeout(function() {
          Alert.alert(internetConnectionTitle,internetConnectionMessage);
      }, 500);
    }

}

var Api = {

    getPeople: function(parent, page, callback) {

        url = API_ENDPOINT + "people/?page=" + page;
        console.log('getPeople method: ' + url);

        fetchGetData(url, function(err, data) {
            if (!err) {
                callback(parent, data);
            } else {
                console.log('getPeople error: ' + err);
                parent.setState({
                  isLoading: false
                });
            }
        });
    },

    getMovies: function(parent, callback) {

        url = API_ENDPOINT + "films";
        console.log('getMovies method: ' + url);

        fetchGetData(url, function(err, data) {
            if (!err) {
                callback(parent, data);
            } else {
                console.log('getMovies error: ' + err);
                parent.setState({
                  isLoading: false
                });
            }
        });
    },
}

module.exports = Api;
