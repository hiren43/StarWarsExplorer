
import { StyleSheet } from 'react-native'

var styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  FlatListContainer: {
      flex: 1,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: 'transparent'
  },

  peopleCardContainer: {
      flexDirection: 'row',
      marginTop: 30,
      backgroundColor: 'rgba(255, 153, 204, 0.8)',
      paddingLeft: 5,
      borderRadius: 12,
      paddingTop: 15,
      paddingBottom: 15
  },

  movieCardContainer: {
      flexDirection: 'row',
      marginTop: 30,
      backgroundColor: 'rgba(66,174,229, 0.8)',
      paddingLeft: 5,
      borderRadius: 12,
      paddingTop: 25,
      paddingBottom: 25
  },

  textStyle: {
   fontSize: 20,
  },

});

export default styles;
