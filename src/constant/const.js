
import {Platform, Dimensions,NetInfo} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export let appName = 'Star Wars Explorer';
export let headerBackColor = "#fff";
export let headerHeight = 56;

export let internetConnectionTitle = appName;
export let internetConnectionMessage = 'No Internet Connection available!! Please try later..';


export let DETAIL_BG_COLOR = '#000000';
export let DETAIL_LEFT_FONT_COLOR = '#c9b84f';
export let DETAIL_RIGHT_FONT_COLOR = '#e4ce48';

export let PEOPLE_BG_IMAGE = 'https://parade.com/wp-content/uploads/2015/04/the-best-star-wars-quotes-of-all-time-1024x640.jpg';
//export let PEOPLE_BG_IMAGE = 'https://content.internetvideoarchive.com/content/hdphotos/13116/013116/013116_1152x864_637407232192928078.jpg';
export let MOVIE_BG_IMAGE = 'https://images.hdqwalls.com/wallpapers/star-wars-dark-space-0a.jpg';

export function checkIntenetStatus(){
  if(Platform.OS === 'android'){
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      console.log('Initial, type: ---- @@@ --- ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType)
      if(connectionInfo.type === 'none'){
        return false;
      }else{
        return true;
      }
    });
  }else{
      fetch('https://www.google.com', {
        method: "Head",
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          Pragma: 'no-cache',
          Expires: 0,
        },
      })
      .then(() => {
        console.log('internet true');
        return true;
      })
      .catch(() => {
        console.log('internet false');
        return false;
      });
  }
}

let d = Dimensions.get('window');
export let { height, width } = d;

export let topbarTopMargin = 0;

export function hasNotch(){

  if(Platform.OS === 'ios' && DeviceInfo.hasNotch()){
      topbarTopMargin = 30;
  }

  return topbarTopMargin;
}
