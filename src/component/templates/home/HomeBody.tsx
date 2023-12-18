import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DARK_PRIMARY_BLACK} from '../../../colors/color';
import {IProduct} from '../../../interface/products';
import BannerFlatList from '../../organisms/list/BannerFlatList';
import ProductFlatList from '../../organisms/list/ProductFlatList';
import {ActivityIndicator} from 'react-native';
var width = Dimensions.get('window').width;

const HomeBody = ({products, isProductsPending}: HomeBodyProps) => {
  const data = Array.from({length: 5}, (_, index) => ({key: String(index)}));
  return (
    <View style={styles.__container}>
      <BannerFlatList data={data} />
      <View style={styles.__content}>
        <Text style={styles.__text}>Recommended</Text>
        {isProductsPending ? (
          <ActivityIndicator size={'large'} color={'#F9B023'} />
        ) : (
          <ProductFlatList products={products} />
        )}
      </View>
    </View>
  );
};
type HomeBodyProps = {
  products?: Array<IProduct>;
  isProductsPending?: boolean;
};
export default HomeBody;

const styles = StyleSheet.create({
  __container: {
    paddingVertical: 30,
  },
  __content: {
    paddingHorizontal: width * 0.05,
    paddingVertical: 30,
    paddingBottom: 100,
  },
  __text: {
    fontFamily: 'Manrope-Regular',
    fontSize: 30,
    color: DARK_PRIMARY_BLACK,
    paddingBottom: 20,
  },
});
