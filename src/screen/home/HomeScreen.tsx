import React, {useEffect} from 'react';
import HomeContent from '../../component/templates/home/HomeContent';
import {StatusBar} from 'react-native';
import {LIGHT_PRIMARY_BLUE} from '../../colors/color';
import {useAppDispatch} from '../../hooks/redux';
import {getAllProductsAction} from '../../redux/action/products';
const HomeScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProductsAction());
  }, []);
  return (
    <>
      <StatusBar
        backgroundColor={LIGHT_PRIMARY_BLUE}
        barStyle={'light-content'}
        animated={true}
      />
      <HomeContent />
    </>
  );
};

export default HomeScreen;
