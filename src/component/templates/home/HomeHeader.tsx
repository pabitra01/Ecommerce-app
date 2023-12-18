import {StyleSheet, TextInput, View, Text, Dimensions} from 'react-native';
import React from 'react';
import {DARK_PRIMARY_BLUE, LIGHT_PRIMARY_BLUE} from '../../../colors/color';
import {ArrowIcon, CartIcon, SearchIcon} from '../../atom/Icons/SvgIcons';
import Cart from '../../organisms/Cart';
var width = Dimensions.get('window').width;

const HomeHeader = () => {
  return (
    <View style={styles.__container}>
      <View style={styles.__hearder}>
        <Text
          style={{
            color: '#fff',
            fontFamily: 'Manrope-SemiBold',
            fontWeight: '600',
            fontSize: 22,
          }}>
          Hey, Pabitra
        </Text>
        <Cart color="white" borderColor="#2A4BA0" />
      </View>
      <View style={styles.__search}>
        <View style={styles.__searchIcon}>
          <SearchIcon />
        </View>
        <TextInput
          style={styles.__searchInput}
          placeholder="Search Products or store"
        />
      </View>
      <View style={styles.__DeliveryInfo}>
        <View>
          <Text style={styles.__DeliveryInfoTitle}>DELIVERY TO</Text>
          <View style={styles.__DeliveryInfoSelect}>
            <Text style={styles.__text}>Green Way 3000, Sylhet</Text>
            <ArrowIcon />
          </View>
        </View>
        <View>
          <Text style={styles.__DeliveryInfoTitle}>WITHIN</Text>
          <View style={styles.__DeliveryInfoSelect}>
            <Text style={styles.__text}>1 Hour</Text>
            <ArrowIcon />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  __container: {
    backgroundColor: LIGHT_PRIMARY_BLUE,
    paddingBottom: 10,
    paddingHorizontal: width * 0.05,
  },
  __hearder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  __search: {
    backgroundColor: DARK_PRIMARY_BLUE,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: 40,
    paddingVertical: 5,
  },
  __searchIcon: {
    paddingHorizontal: 20,
  },
  __searchInput: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    width: '100%',
  },
  __DeliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  __DeliveryInfoTitle: {
    fontFamily: 'Manrope-Bold',
    fontSize: 11,
    color: '#F8F9FB',
    opacity: 0.5,
  },
  __text: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    marginRight: 7,
    color: '#F8F9FB',
  },
  __DeliveryInfoSelect: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
