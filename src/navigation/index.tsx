import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LanguageTranslator from '../screen/I8Folder/LanguageTranslator';
import NewsDetail from '../screen/I8Folder/NewsDetail';
import ImageResizing from '../screen/ImageResize/ImageResizing/ImageResizing';
import PaymentGoogle from '../screen/PaymentMethod/FrontEnd/GooglePay/GooglePay';
import ApplePay from '../screen/PaymentMethod/FrontEnd/ApplePay/ApplePay';

export type MainStackParamsList = {
  LanguageTranslator: undefined;
  NewsDetail: undefined;
  ImageResizing: undefined;
  PaymentGoogle: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamsList>();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ImageResizing"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="LanguageTranslator"
          component={LanguageTranslator}
        />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
        <Stack.Screen name="ImageResizing" component={ImageResizing} />
        <Stack.Screen name="PaymentGoogle" component={PaymentGoogle} />
        <Stack.Screen name="ApplePay" component={ApplePay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
