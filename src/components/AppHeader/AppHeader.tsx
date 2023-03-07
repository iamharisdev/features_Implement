import React, {FC} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors, default_img, family, size, WP} from '../../shared/exporter';

interface Props {
  title?: String;
  onPressBack?: () => void | undefined;
  image?: any;
}

const AppHeader: FC<Props> = ({title, onPressBack, image}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={image ? image : {uri: default_img}}
          style={styles.imageStyle}
          resizeMode={'contain'}
        />
        <Text style={styles.titleStyle}>{title}</Text>
      </View>

      <Icon type="Octicons" name="search" color={colors.b1} size={25} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: WP('4'),
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleStyle: {
    color: colors.b1,
    fontSize: size.medium,
    marginLeft: WP('5'),
    fontFamily: family.Poppins_Regular,
  },
  imageContainer: {
    width: WP('80'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    width: WP('70'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: WP('11'),
    width: WP('11'),
    borderRadius: WP('40'),
  },
});

export {AppHeader};
