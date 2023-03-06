import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LanguageTranslator from '../screen/I8Folder/LanguageTranslator';
import NewsDetail from '../screen/I8Folder/NewsDetail';

export type MainStackParamsList = {
  LanguageTranslator: undefined;
  NewsDetail: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamsList>();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LanguageTranslator"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="LanguageTranslator"
          component={LanguageTranslator}
        />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
