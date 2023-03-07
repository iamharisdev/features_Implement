import {View, Text, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import {appImages, WP} from '../../../shared/exporter';

const ImageResizing = () => {
  const ImageSize = () => {
    Image.getSize(
      'https://i1.sndcdn.com/avatars-000439901343-0dng23-t500x500.jpg',
      (width, height) => {
        console.log('width', width);
        console.log('height', height);
      },
      error => {
        console.log('error', error);
      },
    );
  };

  const windowWidth = Dimensions.get('screen');

  const ratio =
    Image.resolveAssetSource(appImages.airline).width /
    Image.resolveAssetSource(appImages.airline).height;

  const height = windowWidth.width / ratio;

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          width:
            windowWidth.width <
            Image.resolveAssetSource(appImages.airline).width
              ? windowWidth.width
              : Image.resolveAssetSource(appImages.airline).width,
          height:
            windowWidth.width <
            Image.resolveAssetSource(appImages.airline).width
              ? height
              : Image.resolveAssetSource(appImages.airline).height,
        }}>
        <Image style={styles.imageStyle} source={appImages.airline} />
      </View>
    </View>
  );
};

export default ImageResizing;
