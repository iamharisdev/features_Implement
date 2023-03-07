import {StyleSheet, Text, View} from 'react-native';
import {colors, size, WP} from '../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerStyle: {
    fontSize: size.h4,
    fontWeight: 'bold',
    color: colors.g4,
    marginBottom: WP('5'),
    marginTop: WP('10'),
  },
  languageTxt: {
    fontSize: size.h6,
    fontWeight: '600',
    color: colors.g4,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default styles;
