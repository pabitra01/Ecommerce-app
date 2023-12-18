import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DARK_PRIMARY_BLACK} from '../../colors/color';
import {CartIcon} from '../atom/Icons/SvgIcons';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../hooks/redux';

const Cart = ({color, borderColor}: CartProps) => {
  const {cart} = useAppSelector(state => state.products);
  const navigation = useNavigation();
  const onNavigate = () => {
    navigation.navigate('CartScreen');
  };
  return (
    <View style={{position: 'relative'}}>
      <Pressable onPress={onNavigate}>
        <CartIcon color={color} />
        {cart && cart.length > 0 && (
          <View style={{...styles.__cartItemsCount, borderColor: borderColor}}>
            <Text style={{fontSize: 12, color: 'white'}}>{cart?.length}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};
type CartProps = {
  onGoBack?: () => void;
  color?: string;
  borderColor?: string;
};
export default Cart;

const styles = StyleSheet.create({
  __cartItemsCount: {
    width: 26,
    height: 26,
    backgroundColor: '#F9B023',
    position: 'absolute',
    top: -12,
    right: -14,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#2A4BA0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
