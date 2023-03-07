import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import {appImages, WP} from '../../shared/exporter';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {languageToggle} from '../../redux/features/appSlice';
import {useAppDispatch} from '../../redux/store';

const LanguageSelection = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerStyle}>Select Your Language</Text>
      <Image source={appImages.languages} style={{marginBottom: WP('5')}} />
      <View style={{flex: 0.5, justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            marginVertical: WP('3'),
            borderWidth: WP('0.2'),
            paddingHorizontal: WP('10'),
            justifyContent: 'center',
          }}
          onPress={() => {
            //setSelected('english');
            dispatch(languageToggle('english'));
            navigation.navigate('Headlines');
          }}>
          <Text style={styles.languageTxt}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: WP('3'),
            borderWidth: WP('0.2'),
            width: WP('80'),
            justifyContent: 'center',
          }}
          onPress={() => {
            dispatch(languageToggle('japanese'));
            navigation.navigate('Headlines');
          }}>
          <Text style={styles.languageTxt}>Japanese</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LanguageSelection;
