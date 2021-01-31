import React from 'react';
import {
  View,
  Pano,
  asset,
} from 'react-vr';

const PanoLoader = () => {
    return (
      <View>
        <Pano
          source={asset('lake-large.jpg')}
        />
      </View>
    );
  }

export { PanoLoader };
