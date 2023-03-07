import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {Image} from 'react-native-elements';
import {Header} from '../../../components';
import Details from '../../../components/News/Details';
import {MainStackParamsList} from '../../../navigation';
import {appImages} from '../../../shared/exporter';
import {styles} from './styles';

interface Props {}

const NewsDetail: FC<Props> = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<MainStackParamsList, 'NewsDetail'>
    >();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <Header
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.contentContainer}>
          <Image source={appImages.airline} style={styles.imageStyle} />
        </View>
        <Details />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsDetail;
