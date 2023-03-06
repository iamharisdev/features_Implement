import React, {FC} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors, WP} from '../../shared/exporter';

interface Props {
  onPress?: () => void;
}

const Header: FC<Props> = ({onPress}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity style={styles.arrowContainer} onPress={onPress}>
        <Icon
          type="MaterialIcons"
          name="arrow-back"
          size={25}
          color={colors.b1}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.shareContainer}>
        <Icon type="MaterialIcons" name="share" size={25} color={colors.b1} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: WP('6'),
    paddingVertical: WP('4'),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  arrowContainer: {
    width: WP('11'),
    height: WP('11'),
    borderRadius: WP('11'),
    backgroundColor: colors.white,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareContainer: {
    width: WP('11'),
    height: WP('11'),
    borderRadius: WP('11'),
    backgroundColor: colors.white,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {Header};
