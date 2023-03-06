import {
  NavigationAction,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {
  NativeStackNavigationConfig,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack/lib/typescript/src/types';
import * as React from 'react';
import {
  View,
  useWindowDimensions,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useSelector} from 'react-redux';
import {MainStackParamsList} from '../../navigation';
import {colors, family, size, WP} from '../../shared/exporter';
import News from '../News/News';

interface Props {}

const TopTabs: React.FC<Props> = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<MainStackParamsList, 'NewsDetail'>
    >();

  const {value, id} = useSelector((state: any) => state.languageSlice);

  const AllRoute = () => (
    <FlatList
      data={[1, 2, 3, 4]}
      renderItem={() => (
        <News
          onPress={() => {
            navigation.navigate('NewsDetail');
          }}
        />
      )}
    />
  );
  const InternationRoute = () => (
    <FlatList
      data={[1, 2, 3, 4]}
      renderItem={() => (
        <News
          onPress={() => {
            navigation.navigate('NewsDetail');
          }}
        />
      )}
    />
  );
  const MediaRoute = () => (
    <FlatList
      data={[1, 2, 3, 4]}
      renderItem={() => (
        <News
          onPress={() => {
            navigation.navigate('NewsDetail');
          }}
        />
      )}
    />
  );
  const MagazineRoute = () => (
    <FlatList
      data={[1, 2, 3, 4]}
      renderItem={() => (
        <News
          onPress={() => {
            navigation.navigate('NewsDetail');
          }}
        />
      )}
    />
  );
  const BusinessRoute = () => (
    <FlatList
      data={[1, 2, 3, 4]}
      renderItem={() => (
        <News
          onPress={() => {
            navigation.navigate('NewsDetail');
          }}
        />
      )}
    />
  );

  const renderScene = SceneMap({
    All: AllRoute,
    Internation: InternationRoute,
    Media: MediaRoute,
    Magazine: MagazineRoute,
    Business: BusinessRoute,
  });

  const layout = useWindowDimensions();
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={styles.tabBarContainer}
      renderLabel={({route, focused, color}) => (
        <View style={styles.renderLabelContainer}>
          {focused ? <View style={styles.dotStyle} /> : null}
          <Text
            style={{
              color: focused ? colors.pruple : colors.g1,
              fontFamily: focused
                ? family.Poppins_Medium
                : family.Poppins_Light,
              textAlign: 'center',
              width: id == 0 ? '100%' : '80%',
            }}>
            {route.title}
          </Text>
        </View>
      )}
    />
  );

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'All', title: value.All},
    {key: 'Internation', title: value.Internation},
    {key: 'Media', title: value.Media},
    {key: 'Magazine', title: value.Magazine},
    {key: 'Business', title: value.Business},
  ]);

  return (
    <TabView
      style={styles.mainContainer}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: WP('100'),
  },
  indicatorStyle: {
    backgroundColor: 'transparent',
  },
  tabBarContainer: {
    backgroundColor: colors.white2,
    height: 40,
    marginTop: WP('4'),
    elevation: 0,
  },
  renderLabelContainer: {
    width: 80,
    height: 18,
  },
  dotStyle: {
    width: 4,
    height: 4,
    borderRadius: 3,
    backgroundColor: colors.pruple,
    alignSelf: 'center',
  },
});

export {TopTabs};
