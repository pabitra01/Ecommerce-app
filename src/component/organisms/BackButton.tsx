import {Pressable} from 'react-native';
import React from 'react';
import {BackIcon} from '../atom/Icons/SvgIcons';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.goBack();
  };
  return (
    <Pressable onPress={onGoBack}>
      <BackIcon />
    </Pressable>
  );
};

export default BackButton;
