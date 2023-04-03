import React, {useState} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {PlatformPayButton, usePlatformPay} from '@stripe/stripe-react-native';

const PaymentGoogle = () => {
  const {isPlatformPaySupported, confirmPlatformPayPayment} = usePlatformPay();

  React.useEffect(() => {
    (async function () {
      if (!(await isPlatformPaySupported({googlePay: {testEnv: true}}))) {
        Alert.alert('Google Pay is not supported.');
        return;
      }
    });
  }, []);
  const fetchPaymentIntentClientSecret = async () => {
    // Fetch payment intent created on the server, see above
    const response = await fetch(
      `http://192.168.11.15:4000/create-payment-intent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 1000,
        }),
      },
    );
    const {clientSecret} = await response.json();

    return clientSecret;
  };

  const pay = async () => {
    const clientSecret = await fetchPaymentIntentClientSecret();

    const {error} = await confirmPlatformPayPayment(clientSecret, {
      googlePay: {
        testEnv: true,
        merchantName: 'viralsquare',
        merchantCountryCode: 'US',
        currencyCode: 'USD',
        billingAddressConfig: {
          // format: PlatformPay.BillingAddressFormat.Full,
          isPhoneNumberRequired: true,
          isRequired: true,
        },
      },
    });

    if (error) {
      Alert.alert(error.code, error.message);
      // Update UI to prompt user to retry payment (and possibly another payment method)
      return;
    }
    Alert.alert('Success', 'The payment was confirmed successfully.');
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
      }}>
      <PlatformPayButton
        // type={PlatformPayButton}
        onPress={pay}
        style={{
          width: '90%',
          height: 50,
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

export default PaymentGoogle;
