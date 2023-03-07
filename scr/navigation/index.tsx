import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Headlines from '../screens/Headlines/Headlines';
import Details from '../screens/Deatails/Details';
import LanguageSelection from '../screens/LanguageSelection/LanguageSelection';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Headlines"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Headlines" component={Headlines} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
