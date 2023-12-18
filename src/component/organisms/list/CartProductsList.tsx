import {FlatList} from 'react-native';
import React from 'react';
import {IProduct} from '../../../interface/products';
import CartItem from '../../templates/shoppingCart/CartItem';
const renderItem = (item: any) => <CartItem product={item} />;

const CartProductsList = ({products}: CartProductsListProps) => {
  return (
    <FlatList
      data={products}
      renderItem={item => renderItem(item.item)}
      keyExtractor={(item: any) => item.key}
    />
  );
};
type CartProductsListProps = {
  products?: Array<IProduct>;
};

export default CartProductsList;
