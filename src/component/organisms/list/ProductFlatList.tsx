import {FlatList} from 'react-native';
import React from 'react';
import {IProduct} from '../../../interface/products';
import Card from '../Card';
const renderItem = (item: IProduct) => <Card item={item} />;
const ProductFlatList = ({products}: ProductFlatListProps) => {
  return (
    <FlatList
      data={products}
      renderItem={item => renderItem(item.item)}
      keyExtractor={item => `${item.id}`}
      numColumns={2}
      columnWrapperStyle={{gap: 16}}
      contentContainerStyle={{gap: 16}}
    />
  );
};
type ProductFlatListProps = {
  products?: Array<IProduct>;
};
export default ProductFlatList;
