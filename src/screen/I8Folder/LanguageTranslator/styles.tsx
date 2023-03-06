import {StyleSheet} from 'react-native';
import {WP, colors, size, family} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white2,
  },
  secondcontentContainer: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: WP('7'),
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    width: WP('70'),
  },
  titleText: {
    color: colors.b1,
    fontSize: size.xxxtitle,
    fontFamily: family.Poppins_Medium,
    paddingHorizontal: WP('4'),
    paddingVertical: WP('4'),
  },
  imageStyle: {
    height: WP('10'),
    width: WP('10'),
    borderRadius: WP('40'),
  },
  airLaneStyle: {
    height: WP('60'),
    width: WP('90'),
    borderRadius: WP('7'),
    alignSelf: 'center',
  },
  subtitle: {
    color: colors.b1,
    fontFamily: family.Poppins_Medium,
    fontSize: size.medium,
    paddingHorizontal: WP('5'),
    paddingTop: WP('3'),
  },
  contentFooterContainer: {
    paddingHorizontal: WP('5'),
    paddingVertical: WP('3'),
    flexDirection: 'row',
  },
  nameTextStyle: {
    color: colors.g1,
    fontFamily: family.Poppins_Light,
    fontSize: size.tiny,
    alignSelf: 'center',
    marginHorizontal: WP('3'),
  },
  dateTextStyle: {
    color: colors.g1,
    fontFamily: family.Poppins_Light,
    fontSize: size.tiny,
    alignSelf: 'center',
    flex: 1,
    textAlign: 'right',
  },
});

export {styles};
