import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DARK_PRIMARY_YELLOW} from '../../colors/color';
import {ImageIcon} from '../atom/Icons/SvgIcons';

const BannerCard = () => {
  return (
    <View style={styles.__container}>
      <View style={styles.__couponImage}>
        <ImageIcon />
      </View>
      <View style={styles.__couponInfo}>
        <Text style={styles.__text1}>Get</Text>
        <Text style={styles.__text2}>50% OFF</Text>
        <Text style={styles.__text3}>On first 03 order</Text>
      </View>
    </View>
  );
};

export default BannerCard;

const styles = StyleSheet.create({
  __container: {
    backgroundColor: DARK_PRIMARY_YELLOW,
    width: 300,
    height: 130,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  __couponImage: {
    width: 110,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  __couponInfo: {
    width: 190,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  __text1: {
    fontFamily: 'Manrope-Regular',
    fontSize: 20,
    color: '#fff',
  },
  __text2: {
    fontFamily: 'Manrope-Bold',
    fontSize: 26,
    marginVertical: 1,
    color: '#fff',
  },
  __text3: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#fff',
  },
});
