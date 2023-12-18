import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackNavigationParamList = {
    HomeScreen: undefined;
    ProductScreen: undefined;
    CartScreen:undefined
  };


export type RootScreenNavigationProp = NativeStackNavigationProp<
  RootStackNavigationParamList
>;

export type BottomTabNavigatorParamList={
    Home: undefined;
    Category: undefined;
    Favourite:undefined
    More:undefined;
}