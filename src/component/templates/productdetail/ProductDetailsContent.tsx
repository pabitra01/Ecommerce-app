import {StyleSheet} from 'react-native';
import React from 'react';
import {BG_PRIMARY} from '../../../colors/color';
import ProductDetailsHeader from './ProductDetailsHeader';
import {ScrollView} from 'react-native';
import ProductDetailsBody from './ProductDetailsBody';

const ProductDetailsContent = () => {
  return (
    <ScrollView style={styles.__contanier}>
      <ProductDetailsHeader />
      <ProductDetailsBody />
    </ScrollView>
  );
};

export default ProductDetailsContent;

const styles = StyleSheet.create({
  __contanier: {
    backgroundColor: BG_PRIMARY,
    width: '100%',
    height: '100%',
    paddingVertical: 30,
    paddingBottom: 100,
    flex: 1,
  },
});
