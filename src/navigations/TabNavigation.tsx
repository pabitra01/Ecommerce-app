import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabNavigatorParamList} from './type';
import CustomTab from '../component/molecule/CustomTab';
import HomeScreen from '../screen/home/HomeScreen';
import CategoryScreen from '../screen/category/CategoryScreen';
import FavouriteScreen from '../screen/favourite/FavouriteScreen';
const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={(props: any) => <CustomTab {...props} />}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="More"
        component={FavouriteScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
