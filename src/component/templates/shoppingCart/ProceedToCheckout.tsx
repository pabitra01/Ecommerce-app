import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React from 'react';
var width = Dimensions.get('window').width;

const ProceedToCheckout = ({
  subTotal,
  total,
  delivery,
}: ProceedToCheckoutProps) => {
  const handleOrder = () => {
    ToastAndroid.show('Order placed ...', ToastAndroid.SHORT);
  };
  return (
    <View style={styles.__container}>
      <View style={styles.__content}>
        <View style={{paddingHorizontal: width * 0.1}}>
          <View style={styles.__wrapper}>
            <Text style={styles.__label}>Subtotal</Text>
            <Text style={styles.__price}> ₹{subTotal}</Text>
          </View>
          <View style={styles.__wrapper}>
            <Text style={styles.__label}>Delivery</Text>
            <Text style={styles.__price}> ₹{delivery}</Text>
          </View>
          <View style={styles.__wrapper}>
            <Text style={styles.__label}>Total</Text>
            <Text style={styles.__price}> ₹{total}</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: width * 0.05}}>
          <Pressable style={styles.__btn} onPress={handleOrder}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Manrope-SemiBold',
                fontSize: 14,
              }}>
              Proceed To Checkout
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

type ProceedToCheckoutProps = {
  subTotal: number;
  delivery: number;
  total: number;
};
export default ProceedToCheckout;

const styles = StyleSheet.create({
  __container: {
    paddingHorizontal: width * 0.03,
  },
  __content: {
    width: '100%',
    backgroundColor: '#F8F9FB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
  },
  __wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  __label: {
    fontSize: 16,
    color: '#616A7D',
  },
  __price: {
    fontSize: 16,
    color: 'black',
  },
  __btn: {
    width: '100%',
    marginVertical: 30,
    backgroundColor: '#2A4BA0',
    paddingVertical: 20,
    textAlign: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
