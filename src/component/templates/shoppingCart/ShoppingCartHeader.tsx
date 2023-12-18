import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackIcon} from '../../atom/Icons/SvgIcons';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../../hooks/redux';
var width = Dimensions.get('window').width;

const ShoppingCartHeader = () => {
  const {cart} = useAppSelector(state => state.products);
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.__contanier}>
      <Pressable onPress={onGoBack}>
        <BackIcon />
      </Pressable>
      <View>
        <Text style={styles.__title}>Shopping Cart ({cart?.length})</Text>
      </View>
    </View>
  );
};
type ShoppingCartHeaderProps = {
  onGoBack: () => void;
};
export default ShoppingCartHeader;

const styles = StyleSheet.create({
  __contanier: {
    paddingHorizontal: width * 0.05,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  __title: {
    marginLeft: 30,
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
    color: 'black',
  },
});
