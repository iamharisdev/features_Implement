import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Deals from '../screens/Deals/Deals';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Deals"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Deals" component={Deals} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
