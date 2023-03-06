import React, {FC, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {AppHeader, AppHeadline, TabBar} from '../../components';
import {colors, WP} from '../../shared/exporter';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAppSelector} from '../../redux/store';

interface Props {}

const Headlines: FC<Props> = () => {
  const [selected, setSelected] = useState('english');
  const {value, selection} = useAppSelector(state => state.appSlice);
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <AppHeader isSearch isProfile />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: WP('5'),
        }}>
        <Text style={styles.headingTxtStryle}>{selection?.BreakingNews}</Text>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: colors.blue,
            padding: WP('2'),
            borderRadius: WP('2'),
          }}
          onPress={() => {
            navigation.navigate('LanguageSelection');
          }}>
          <Text style={{color: colors.white, fontWeight: 'bold'}}>
            {value ? value : selected}
          </Text>
        </TouchableOpacity>
      </View>

      <AppHeadline
        isDetail={false}
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  );
};

export default Headlines;
