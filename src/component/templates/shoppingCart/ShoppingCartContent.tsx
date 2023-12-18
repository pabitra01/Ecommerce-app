import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ShoppingCartHeader from './ShoppingCartHeader';
import {BG_PRIMARY} from '../../../colors/color';
import ProceedToCheckout from './ProceedToCheckout';
import {useAppSelector} from '../../../hooks/redux';
import {IProduct} from '../../../interface/products';
import CartProductsList from '../../organisms/list/CartProductsList';
const ShoppingCartContent = () => {
  const {cart, products} = useAppSelector(state => state.products);
  const [cartProducts, setCartProducts] = useState<Array<IProduct>>([]);
  const getSubTotal = () => {
    let _subTotal = 0;
    cartProducts.forEach(prod => {
      _subTotal =
        _subTotal +
        prod.price * (prod?.quantity === undefined ? 1 : prod.quantity || 0);
    });
    return _subTotal;
  };
  const subTotal = getSubTotal();
  const delivery = subTotal === 0 ? 0 : 50;
  const total = subTotal + delivery;
  const onGetCartProducts = () => {
    let _products: Array<IProduct> = [];
    cart?.forEach(id => {
      const pro = products?.find(_ => _.id == id);
      if (pro) {
        _products.push(pro);
      }
    });
    setCartProducts(_products);
  };
  useEffect(() => {
    onGetCartProducts();
  }, [products]);
  return (
    <View style={styles.__contanier}>
      <ShoppingCartHeader />
      <CartProductsList products={cartProducts} />
      <ProceedToCheckout
        subTotal={subTotal}
        delivery={delivery}
        total={total}
      />
    </View>
  );
};

export default ShoppingCartContent;

const styles = StyleSheet.create({
  __contanier: {
    backgroundColor: BG_PRIMARY,
    width: '100%',
    height: '100%',
    flex: 1,
  },
});
