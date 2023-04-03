import {View, Text, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import {StripeProvider, useApplePay} from '@stripe/stripe-react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';

const ApplePay = () => {
  const {presentApplePay, confirmApplePayPayment} = useApplePay();
  const handlePayPress = async () => {
    const {error, paymentMethod} = await presentApplePay({
      cartItems: [
        {
          label: 'payment label',
          amount: '50', // amount as string
          type: 'final',
        },
      ],
      country: 'US', // enter any country code supported by stripe,
      currency: 'USD', // enter any currency supported by stripe,
    });
    if (error) {
      Alert.alert(error.code, error.message);
    } else {
      const {error: confirmApplePayError} = await confirmApplePayPayment(
        clientSecret,
      );
      confirmApplePayPayment(clientSecret);
      if (confirmApplePayError) {
        Alert.alert(confirmApplePayError.code, confirmApplePayError.message);
      } else {
        Alert.alert('Success', 'The payment was confirmed successfully!');
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          handlePayPress();
        }}
        style={{
          width: WP('90'),
          padding: WP('3'),
          backgroundColor: colors.pruple,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: family.Poppins_Medium,
            fontSize: size.normal,
            color: colors.b1,
          }}>
          Apple Pay
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ApplePay;
