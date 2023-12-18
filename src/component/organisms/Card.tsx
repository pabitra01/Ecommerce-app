import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import {
  LikeIconFilledV1,
  LikeLineIconV1,
  PlusIcon,
} from '../atom/Icons/SvgIcons';
import {IProduct} from '../../interface/products';
import {
  setCarts,
  setProducts,
  setSelectedProductId,
} from '../../redux/reducer/products';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useNavigation} from '@react-navigation/native';
var width = Dimensions.get('window').width;

const Card = ({item}: CardProps) => {
  const {cart, products} = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const onAddCart = () => {
    const cartCopy = [...(cart || [])];
    if (cartCopy.includes(item.id)) {
      ToastAndroid.show('Already added to bag.', ToastAndroid.SHORT);
      return;
    }
    cartCopy.push(item.id);
    dispatch(setCarts(cartCopy));
    ToastAndroid.show('Added to bag.', ToastAndroid.SHORT);
  };
  const handleProductClick = () => {
    dispatch(setSelectedProductId(item.id));
    navigation.navigate('ProductScreen');
  };
  const onLike = () => {
    const _products = [...(products || [])];
    const _productIndex = _products.findIndex(_ => _.id == item.id);
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
  return (
    <View style={styles.__productCard}>
      <TouchableOpacity
        style={styles.__productImage}
        onPress={handleProductClick}>
        <Image source={{uri: item.thumbnail}} style={styles.__image} />
      </TouchableOpacity>
      <Text style={styles.__likeIcon}>
        <Pressable onPress={onLike}>
          {item.isLiked ? <LikeIconFilledV1 /> : <LikeLineIconV1 />}
        </Pressable>
      </Text>
      <View style={styles.__productInfo}>
        <View style={styles.__productPrice}>
          <Text style={styles.__price}> ₹{item.price}</Text>
          <TouchableOpacity style={styles.__addProduct} onPress={onAddCart}>
            <Text style={styles.__plusIcon}>
              <PlusIcon color="#fff" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.__productDesc}>
          <Text style={styles.__productDescContent}>{item.title}</Text>
        </View>
      </View>
    </View>
  );
};
type CardProps = {
  item: IProduct;
};
export default Card;

const styles = StyleSheet.create({
  __productCard: {
    width: width * 0.43,
    backgroundColor: '#F8F9FB',
    borderRadius: 12,

    flexGrow: 1,
  },
  __image: {
    width: '70%',
    height: '70%',
    objectFit: 'contain',
  },
  __likeIcon: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  __productImage: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 4 / 3,
  },
  __productInfo: {
    paddingVertical: 20,
  },
  __productPrice: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  __price: {
    fontFamily: 'Manrope-Regular',
    color: 'black',
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 18,
  },
  __addProduct: {
    width: 27,
    height: 27,
    backgroundColor: '#2A4BA0',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  __plusIcon: {
    fontSize: 20,
    color: 'white',
  },
  __productDesc: {
    paddingHorizontal: 20,
  },
  __productDescContent: {
    fontSize: 12,
    fontFamily: 'Manrope-SemiBold',
    color: '#616A7D',
    lineHeight: 16,
  },
});
