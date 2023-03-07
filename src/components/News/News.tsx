import moment from 'moment';
import React, {FC} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {appImages, colors, family, size, WP} from '../../shared/exporter';

interface Props {
  onPress?: () => void | undefined;
}

const News: FC<Props> = ({onPress}) => {
  const {value} = useSelector((state: any) => state.languageSlice);

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Image source={appImages.airline} style={styles.imageStyle} />
      <View style={styles.contentContainer}>
        <Text style={styles.titleTextStyle}>{value.fights}</Text>
        <View style={styles.secondContentContainer}>
          <Icon
            type="MaterialIcons"
            name="calendar-today"
            color={colors.g1}
            size={20}
          />
          <Text style={styles.dateTextStyle}>
            {moment(new Date()).format('Do MMM YYYY')}
          </Text>
          <Icon
            type="MaterialIcons"
            name="lock-clock"
            color={colors.g1}
            size={20}
            style={styles.clockIconStyle}
          />
          <Text style={styles.minuteStyle}>
            {moment.duration(moment(new Date()).diff(moment())).humanize()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: WP('5'),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: WP('6'),
  },
  imageStyle: {
    height: WP('23'),
    width: WP('25'),
    borderRadius: WP('6'),
    marginRight: WP('3'),
  },
  contentContainer: {
    width: WP('65'),
  },
  titleTextStyle: {
    fontFamily: family.Poppins_Medium,
    color: colors.b1,
    fontSize: size.small,
  },
  secondContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTextStyle: {
    textAlign: 'center',
    color: colors.g1,
    fontFamily: family.Poppins_Light,
    fontSize: size.small,
    marginLeft: WP('2'),
  },
  clockIconStyle: {
    marginLeft: WP('4'),
  },
  minuteStyle: {
    textAlign: 'center',
    color: colors.g1,
    fontFamily: family.Poppins_Light,
    fontSize: size.small,
  },
});

export default News;
