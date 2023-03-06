import {StyleSheet} from 'react-native';
import {WP, colors, family, size} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    alignSelf: 'center',
  },
  imageStyle: {
    width: WP('85'),
    height: WP('55'),
    borderRadius: WP('6'),
    alignSelf: 'center',
    marginTop: WP('5'),
  },
});

export {styles};
