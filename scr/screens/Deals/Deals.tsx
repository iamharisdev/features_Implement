import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {AppHeader} from '../../components';

const Deals = () => {
  return (
    <View style={styles.mainContainer}>
      <AppHeader />
    </View>
  );
};

export default Deals;
