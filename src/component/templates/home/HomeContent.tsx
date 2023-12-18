import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import HomeHeader from './HomeHeader';
import {BG_PRIMARY} from '../../../colors/color';
import {useAppSelector} from '../../../hooks/redux';
import HomeBody from './HomeBody';

const HomeContent = () => {
  const {products, isProductsPending} = useAppSelector(state => state.products);
  return (
    <>
      <ScrollView style={styles.__container}>
        <HomeHeader />
        <HomeBody products={products} isProductsPending={isProductsPending} />
      </ScrollView>
    </>
  );
};

export default HomeContent;

const styles = StyleSheet.create({
  __container: {
    height: '100%',
    width: '100%',
    backgroundColor: BG_PRIMARY,
    flex: 1,
  },
  __navigation: {
    width: '100%',
    backgroundColor: BG_PRIMARY,
  },
});
