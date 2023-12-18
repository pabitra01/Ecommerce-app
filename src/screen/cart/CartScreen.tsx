import {StatusBar} from 'react-native';
import React from 'react';
import {BG_PRIMARY} from '../../colors/color';
import ShoppingCartContent from '../../component/templates/shoppingCart/ShoppingCartContent';

const CartScreen = () => {
  return (
    <>
      <StatusBar
        backgroundColor={BG_PRIMARY}
        barStyle={'dark-content'}
        animated={true}
      />
      <ShoppingCartContent />
    </>
  );
};
export default CartScreen;
