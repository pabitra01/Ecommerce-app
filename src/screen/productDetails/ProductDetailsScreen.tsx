import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {BG_PRIMARY} from '../../colors/color';
import ProductDetailsContent from '../../component/templates/productdetail/ProductDetailsContent';

const ProductDetailsScreen = () => {
  return (
    <>
      <StatusBar
        backgroundColor={BG_PRIMARY}
        barStyle={'dark-content'}
        animated={true}
      />
      <ProductDetailsContent />
    </>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
