import React from 'react';
import {View} from 'react-native';
import {AppHeader, AppHeadline} from '../../components';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Details = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <AppHeader
        isProfile={false}
        isSearch={false}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <AppHeadline isDetail />
    </View>
  );
};

export default Details;
