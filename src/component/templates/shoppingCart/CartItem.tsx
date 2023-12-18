import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React from 'react';
import {MinusIcon, PlusIcon} from '../../atom/Icons/SvgIcons';
import {IProduct} from '../../../interface/products';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {setProducts} from '../../../redux/reducer/products';
var width = Dimensions.get('window').width;

const CartItem = ({product}: CartItemProps) => {
  const {products} = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();
  const onQuantityChange = (value: number) => {
    const _products = [...(products || [])];
    const _productIndex = _products.findIndex(_ => _.id == product.id);
    const quantity = _products[_productIndex].quantity || 1;
    if (_products[_productIndex].isLiked) {
      _products[_productIndex] = {
        ..._products[_productIndex],
        quantity: quantity + value,
      };
      dispatch(setProducts(_products));
      return;
    }
    _products[_productIndex] = {
      ..._products[_productIndex],
      quantity: quantity + value,
    };
    dispatch(setProducts(_products));
  };
  return (
    <View style={styles.__container}>
      <View style={styles.__productImg}>
        <Image
          source={{
            uri: product.thumbnail,
          }}
          style={styles.__image}
        />
      </View>
      <View style={styles.__productPrice}>
        <Text style={styles.__productName}>{product.title}</Text>
        <Text style={styles.__productPriceTxt}>₹{product.price}</Text>
      </View>
      <View style={styles.__productQuantity}>
        <Pressable
          style={styles.__iconWrapper}
          onPress={() => onQuantityChange(-1)}>
          <Text style={styles.__icon}>
            <MinusIcon />
          </Text>
        </Pressable>
        <Text style={styles.__quantityText}>
          {product.quantity === 0 ? 0 : product.quantity || 1}
        </Text>
        <Pressable
          style={styles.__iconWrapper}
          onPress={() => onQuantityChange(1)}>
          <Text style={styles.__icon}>
            <PlusIcon />
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
type CartItemProps = {
  product: IProduct;
};
export default CartItem;

const styles = StyleSheet.create({
  __container: {
    paddingHorizontal: width * 0.05,
    flexDirection: 'row',
    height: 100,
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#EBEBFB',
    alignItems: 'center',
  },
  __productImg: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  __productPrice: {
    paddingLeft: 20,
  },
  __productQuantity: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
  },
  __productName: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Manrope-SemiBold',
    color: '#1E222B',
  },
  __productPriceTxt: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Manrope-Regular',
    color: '#1E222B',
  },
  __image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    objectFit: 'contain',
  },
  __iconWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FB',
    borderRadius: 50,
  },
  __icon: {
    fontSize: 16,
    color: '#130F26',
  },
  __quantityText: {
    paddingHorizontal: 10,
    fontSize: 14,
    fontFamily: 'Manrope-Bold',
    color: 'black',
  },
});
