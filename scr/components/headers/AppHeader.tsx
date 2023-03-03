import React, {FC} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {appImages, WP} from '../../shared/exporter';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  myIcon: any;
}

const AppHeader: FC<Props> = () => {
  const myIcon = <Icon name="rocket" size={30} color="#900" />;

  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={appImages.default} style={styles.imageStyle}></Image>
        <Text style={styles.dateStyle}>AppHeader</Text>
        <Icon name="rocket" size={30} color="#900" />
      </View>
    </View>
  );
};

export {AppHeader};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: WP('5'),
    alignItems: 'center',
    paddingVertical: WP('5'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageStyle: {
    width: WP('12'),
    height: WP('12'),
    borderRadius: WP('6'),
  },
  dateStyle: {
    marginHorizontal: WP('3'),
  },
});
