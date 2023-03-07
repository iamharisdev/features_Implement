import React, {FC} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {appImages, colors, size, WP} from '../../shared/exporter';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  isSearch: boolean;
  isProfile: boolean;
  onPress?: () => void;
}

const AppHeader: FC<Props> = ({isProfile, isSearch, onPress}) => {
  return (
    <View style={styles.headerContainer}>
      {isProfile ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={appImages.default} style={styles.imageStyle}></Image>
          <Text style={styles.dateStyle}>10 jan, 2021</Text>
        </View>
      ) : (
        <TouchableOpacity style={styles.iconContainerStyle} onPress={onPress}>
          <Icon name="arrow-back" size={20} />
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.iconContainerStyle}>
        {isSearch ? (
          <Icon name="search-outline" size={20} />
        ) : (
          <Icon name="share-social-outline" size={20} />
        )}
      </TouchableOpacity>
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
    width: WP('10'),
    height: WP('10'),
    borderRadius: WP('5'),
  },
  dateStyle: {
    marginHorizontal: WP('3'),
    fontSize: size.xsmall,
    color: colors.g12,
  },
  iconContainerStyle: {
    width: WP('8'),
    height: WP('8'),
    borderRadius: WP('4'),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
