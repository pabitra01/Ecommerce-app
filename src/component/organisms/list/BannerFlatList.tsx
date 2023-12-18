import {FlatList} from 'react-native';
import React from 'react';
import BannerCard from '../BannerCard';
const renderBanner = () => <BannerCard />;
const BannerFlatList = ({data}: BannerFlatListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={renderBanner}
      keyExtractor={(item: any) => item.key}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

type BannerFlatListProps = {
  data?: any;
};
export default BannerFlatList;
