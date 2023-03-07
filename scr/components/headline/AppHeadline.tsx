import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {appImages, WP, colors, size} from '../../shared/exporter';
import {useAppSelector} from '../../redux/store';

interface Props {
  isDetail: boolean;
  onPress?: () => void;
}
const AppHeadline: FC<Props> = ({isDetail = false, onPress}) => {
  const {value, selection} = useAppSelector(state => state.appSlice);
  return (
    <ScrollView>
      <TouchableOpacity style={styles.newsContainerStyle} onPress={onPress}>
        <Image
          source={appImages.plane}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <Text style={styles.newsHeadingTxtStyle}>{selection.NewsHeading}</Text>
        <View style={styles.refContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={appImages.default}
              style={styles.profileImageStyle}
            />
            <Text>John Smith</Text>
          </View>
          <Text>10 jan, 2020</Text>
        </View>
        {isDetail && <Text style={styles.txtStyles}>{selection.Detail}</Text>}
      </TouchableOpacity>
    </ScrollView>
  );
};

export {AppHeadline};

const styles = StyleSheet.create({
  newsContainerStyle: {
    width: WP('90'),
    //height: WP('80'),
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginTop: WP('5'),
    borderRadius: WP('10'),
  },
  imageStyle: {
    width: WP('90'),
    height: WP('51.5'),
    alignSelf: 'center',
    borderRadius: WP('10'),
  },
  newsHeadingTxtStyle: {
    fontSize: size.large,
    color: colors.g4,
    marginHorizontal: WP('3'),
    fontWeight: 'bold',
    marginTop: WP('5'),
    //alignSelf: 'center',
  },
  refContainer: {
    flexDirection: 'row',
    paddingHorizontal: WP('3'),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: WP('3'),
  },
  profileImageStyle: {
    width: WP('8'),
    height: WP('8'),
    borderRadius: WP('4'),
    marginRight: WP('2'),
  },
  txtStyles: {
    paddingVertical: WP('6'),
  },
});
