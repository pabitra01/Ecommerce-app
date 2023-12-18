import React, {useRef} from 'react';
import {View, StyleSheet, Dimensions, Image, Pressable} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {FavoriteFillIcon, FavouriteIcon} from '../atom/Icons/SvgIcons';
import {IProduct} from '../../interface/products';
var width = Dimensions.get('window').width;
const height = (9 / 16) * width;
const MyCarousel = ({product, onLike}: MyCarouselProps) => {
  const carouselRef = useRef<any>(null);
  const [index, setIndex] = React.useState(0);

  const renderItem = ({item, index}: {item: any; index: number}) => (
    <View style={styles.__slide}>
      <Image source={{uri: item}} style={styles.__image} />
    </View>
  );

  return (
    <View style={styles.__carousel}>
      <Carousel
        ref={carouselRef}
        data={product?.images || []}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={index => setIndex(index)}
      />
      <View style={styles.__pagination}>
        <Pagination
          dotsLength={product?.images.length || 0}
          activeDotIndex={index}
          carouselRef={carouselRef}
          dotStyle={{
            width: 20,
            height: 4,
            borderRadius: 10,
          }}
          animatedDuration={0}
          dotColor="#F9B023"
          inactiveDotColor="#E4E4E4"
          dotContainerStyle={{
            marginHorizontal: 3,
          }}
          inactiveDotScale={1}
          tappableDots={true}
        />
      </View>
      <Pressable style={styles.__favourite} onPress={onLike}>
        {product?.isLiked ? (
          <FavoriteFillIcon width="22" height="21" />
        ) : (
          <FavouriteIcon />
        )}
      </Pressable>
    </View>
  );
};

export default MyCarousel;
type MyCarouselProps = {
  product?: IProduct;
  onLike: () => void;
};
const styles = StyleSheet.create({
  __contanier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 200,
  },
  __title: {
    color: 'black',
  },
  __favourite: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 20,
    right: 30,
    top: 20,
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#00000070',
  },
  __carousel: {
    width: width,
    height: height,
    position: 'relative',
  },
  __slide: {
    width: '100%',
    aspectRatio: 16 / 9,
    position: 'relative',
  },
  __image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  __pagination: {
    position: 'absolute',
    bottom: -5,
    left: 0,
  },
});
