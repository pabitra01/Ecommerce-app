import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Keyboard} from 'react-native';
import {
  CategoryIcon,
  FavouriteIcon,
  HomeFillIcon,
  HomeIcon,
  MoreIcon,
} from '../atom/Icons/SvgIcons';
const CustomTab = ({state, descriptors, navigation}: any) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <View
      style={{
        flexDirection: 'row',
        display: isKeyboardVisible ? 'none' : 'flex',
      }}>
      <View style={styles.__container}>
        <View style={styles.__content}>
          {state.routes.map(
            (route: {key: string | number; name: any}, index: any) => {
              const {options} = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;

              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate({name: route.name, merge: true});
                }
              };
              const renderIcon = () => {
                switch (route.name) {
                  case 'Home':
                    return isFocused ? <HomeFillIcon /> : <HomeIcon />;

                  case 'Category':
                    return isFocused ? (
                      <CategoryIcon color="#F9B023" />
                    ) : (
                      <CategoryIcon />
                    );
                  case 'Favourite':
                    return isFocused ? (
                      <FavouriteIcon color="#E0B420" />
                    ) : (
                      <FavouriteIcon />
                    );
                  case 'More':
                    return isFocused ? (
                      <MoreIcon color="#E0B420" />
                    ) : (
                      <MoreIcon />
                    );
                  default:
                    return <HomeIcon />;
                }
              };
              return (
                <TouchableOpacity
                  style={styles.__icons}
                  onPress={onPress}
                  key={route.key}>
                  <View style={styles.__iconWrapper}>
                    <View
                      style={{
                        ...styles.__focusIcon,
                        backgroundColor: isFocused ? 'black' : 'white',
                        top: isFocused ? -20 : 0,
                      }}>
                      <Text>{renderIcon()}</Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      color: '#8891A5',
                      opacity: isFocused ? 0 : 1,
                      fontSize: 12,
                      fontFamily: 'Manrope-Regular',
                    }}>
                    <>{route.name}</>
                  </Text>
                </TouchableOpacity>
              );
            },
          )}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  __container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  __content: {
    width: '100%',
    backgroundColor: '#ffffff',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingBottom: 30,
    paddingTop: 10,
  },
  __icons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  __focusIcon: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  __iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'relative',
  },
});
export default CustomTab;
