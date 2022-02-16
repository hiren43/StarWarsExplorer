import React from 'react';
import { Image, View } from 'react-native';
import FastImage from 'react-native-fast-image'

export default function Loader() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
      }}
    >
        <FastImage
           style={{width: '100%', height: '100%'}}
           source={{
               uri: 'https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif',
               headers: { Authorization: 'someAuthToken' },
               priority: FastImage.priority.normal,
           }}
           resizeMode={FastImage.resizeMode.contain}
        />
    </View>
  );
}
