import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import Cart from '../../organisms/Cart';
import BackButton from '../../organisms/BackButton';
var width = Dimensions.get('window').width;

const ProductDetailsHeader = () => {
  return (
    <View style={styles.__contanier}>
      <BackButton />
      <Cart color="black" borderColor="white" />
    </View>
  );
};

export default ProductDetailsHeader;

const styles = StyleSheet.create({
  __contanier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
  },
});
