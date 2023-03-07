import React, {useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const FirstRoute = () => <View style={{flex: 1}} />;

// const SecondRoute = () => (
//   <View style={{flex: 1, backgroundColor: '#673ab7'}} />
// );

const renderScene = SceneMap({
  All: FirstRoute,
  International: FirstRoute,
  Media: FirstRoute,
  Magazine: FirstRoute,
  Business: FirstRoute,
});

const TabBar = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'All', title: 'All'},
    {key: 'International', title: 'International'},
    {key: 'Media', title: 'Media'},
    {key: 'Magazine', title: 'Magazine'},
    {key: 'Business', title: 'Business'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};
export {TabBar};
