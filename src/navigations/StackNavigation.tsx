import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import {RootStackNavigationParamList} from './type';
import ProductDetailsScreen from '../screen/productDetails/ProductDetailsScreen';
import CartScreen from '../screen/cart/CartScreen';

const stack = createNativeStackNavigator<RootStackNavigationParamList>();
const StackNavigation = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="HomeScreen"
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="ProductScreen"
        component={ProductDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};

export default StackNavigation;
