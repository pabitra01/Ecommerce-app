import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React from 'react';
import {DARK_PRIMARY_BLUE} from '../../../colors/color';
import {StarFillIcon, StarHalfFillIcon} from '../../atom/Icons/SvgIcons';
import MyCarousel from '../../organisms/Carousel';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {setCarts, setProducts} from '../../../redux/reducer/products';
import {useNavigation} from '@react-navigation/native';
var width = Dimensions.get('window').width;

const ProductDetailsBody = () => {
  const {selectedProductId, products, cart} = useAppSelector(
    state => state.products,
  );
  const navigation = useNavigation();
  const product = products?.find(product => product.id == selectedProductId);
  const dispatch = useAppDispatch();
  const fullRating = Math.floor(product?.rating || 0);
  const isHalfRating = product?.rating || 0 - fullRating;
  const fullStars = Array(fullRating).fill(<StarFillIcon />);
  const halfStar = isHalfRating > 0 ? <StarHalfFillIcon /> : null;
  const onLike = () => {
    const _products = [...(products || [])];
    const _productIndex = _products.findIndex(_ => _.id == selectedProductId);
    if (_products[_productIndex].isLiked) {
      _products[_productIndex] = {..._products[_productIndex], isLiked: false};
      dispatch(setProducts(_products));
      ToastAndroid.show('Removed from favorite.', ToastAndroid.SHORT);
      return;
    }
    _products[_productIndex] = {..._products[_productIndex], isLiked: true};
    dispatch(setProducts(_products));
    ToastAndroid.show('Added to Favourite.', ToastAndroid.SHORT);
  };
  const onAddCart = () => {
    const cartCopy = [...(cart || [])];
    if (cartCopy.includes(product?.id || -1)) {
      ToastAndroid.show('Already added to bag.', ToastAndroid.SHORT);
      return;
    }
    if (product?.id) {
      cartCopy.push(product?.id);
      dispatch(setCarts(cartCopy));
      ToastAndroid.show('Added to bag.', ToastAndroid.SHORT);
    }
  };
  const onNavagateToCart = () => {
    onAddCart();
    navigation.navigate('CartScreen');
  };
  return (
    <View style={styles.__contanier}>
      <Text style={styles.__thintext}>{product?.category}</Text>
      <Text style={styles.__boldtext}>{product?.title}</Text>
      <View style={styles.__Review}>
        {fullStars}
        {halfStar}
        <Text style={styles.__reviewtext}>{product?.rating} Ratings</Text>
      </View>
      <View style={{marginTop: 20}}>
        <MyCarousel product={product} onLike={onLike} />
      </View>
      <View style={styles.__price}>
        <View>
          <Text style={styles.__boldpricetext}>₹{product?.price}</Text>
        </View>
        <View style={styles.__discount}>
          <Text style={styles.__discountText}>
            {product?.discountPercentage}% OFF
          </Text>
        </View>
      </View>
      <View style={styles.__buy}>
        <Pressable style={styles.__addToCart} onPress={onAddCart}>
          <Text
            style={{
              color: '#2A4BA0',
              fontFamily: 'Manrope-SemiBold',
              fontSize: 14,
            }}>
            Add To Cart
          </Text>
        </Pressable>
        <Pressable style={styles.__buyNow} onPress={onNavagateToCart}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Manrope-SemiBold',
              fontSize: 14,
            }}>
            Buy Now
          </Text>
        </Pressable>
      </View>
      <View style={styles.__details}>
        <Text style={styles.__detTitle}>Details</Text>
        <Text style={styles.__detDesc}>{product?.description}</Text>
      </View>
    </View>
  );
};

export default ProductDetailsBody;

const styles = StyleSheet.create({
  __txtCart: {
    color: '#2A4BA0',
  },
  __contanier: {
    paddingTop: 20,
  },
  __thintext: {
    fontFamily: 'Manrope-Light',
    fontSize: 50,
    lineHeight: 62,
    fontWeight: '300',
    width: '100%',
    color: '#1E222B',
    paddingHorizontal: 20,
  },
  __boldtext: {
    fontFamily: 'Manrope-Bold',
    fontSize: 50,
    lineHeight: 62,
    color: '#1E222B',
    paddingHorizontal: 20,
  },
  __thinpricetext: {
    fontFamily: 'Manrope-Light',
    fontSize: 16,
    color: DARK_PRIMARY_BLUE,
    paddingHorizontal: 20,
  },
  __boldpricetext: {
    fontFamily: 'Manrope-Bold',
    fontSize: 17,
    fontWeight: '800',
    width: '100%',
    color: '#2A4BA0',
    paddingHorizontal: 20,
  },
  __Review: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  __reviewtext: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#A1A1AB',
    marginLeft: 10,
  },
  __price: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  __discount: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: '#2A4BA0',
    marginLeft: 3,
  },
  __discountText: {
    color: 'white',
    fontFamily: 'Manrope-Regular',
  },
  __buy: {
    paddingHorizontal: width * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  __addToCart: {
    width: width * 0.41,
    borderWidth: 2,
    borderColor: '#2A4BA0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 20,
  },
  __buyNow: {
    width: width * 0.41,
    backgroundColor: '#2A4BA0',
    paddingVertical: 20,
    textAlign: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  __details: {
    paddingHorizontal: width * 0.05,
    paddingVertical: 20,
    paddingBottom: 100,
  },
  __detTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    marginBottom: 10,
    fontFamily: 'Manrope-Regular',
  },
  __detDesc: {
    color: '#8891A5',
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
  },
});
