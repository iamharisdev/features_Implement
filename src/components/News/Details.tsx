import moment from 'moment';
import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {WP, colors, family, size, default_img} from '../../shared/exporter';

const Details = () => {
  const {value} = useSelector((state: any) => state.languageSlice);
  return (
    <SafeAreaView>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: default_img}}
            style={styles.imageStyle}
            resizeMode={'contain'}
          />
          <Text style={styles.titleStyle}>{value.JohnSmith}</Text>
        </View>
        <Text style={styles.timeTextStyle}>
          {moment(new Date()).format('Do MMM YYYY')}
        </Text>
      </View>
      <Text style={styles.ParaTextStyle}>{value.Para}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    padding: WP('4'),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: WP('3'),
  },
  titleStyle: {
    color: colors.b1,
    fontSize: size.medium,
    marginLeft: WP('3'),
    fontFamily: family.Poppins_Regular,
  },
  timeTextStyle: {
    color: colors.b1,
    fontSize: size.medium,
    fontFamily: family.Poppins_Regular,
  },
  imageContainer: {
    width: WP('65'),
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
  ParaTextStyle: {
    color: colors.g1,
    fontSize: size.normal,
    fontFamily: family.Poppins_Regular,
    margin: WP('6'),
  },
});

export {styles};

export default Details;
