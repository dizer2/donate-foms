import React from 'react'
import GooglePayButton from '@google-pay/button-react';

function GooglePay({inputValue}) {
  return (
	<GooglePayButton 
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '4563673747477537',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'ESTIMATED',
            totalPriceLabel: 'Total',
            totalPrice: "1",
            currencyCode: 'USD',
            countryCode: 'US',
          },
        }}
		   onLoadPaymentData={paymentRequest => {
		   		console.log('load payment data', paymentRequest);
			}}

			  existingPaymentMethodRequired='false'
			  buttonColor='black'
			  buttonType='short'
      />
  )
}

export default GooglePay;