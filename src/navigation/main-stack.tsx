import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FoodList from '@screens/food-list';
import FoodDetails from '@screens/food-details';
import { ThemeFont } from '@components/typography';
import { COLORS } from '@constants/colors';

import ROUTES from './routes';
import { MainStackParamList } from './types';
import { FONT_SIZES } from '@constants/font-sizes';

//
//

const RootStack = createNativeStackNavigator<MainStackParamList>();

const Stack = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitle: '',
        headerTitleStyle: {
          fontSize: FONT_SIZES.base,
          ...ThemeFont.medium,
        },
        contentStyle: {
          backgroundColor: COLORS.mainBackground,
        },
      }}>
      <RootStack.Screen
        name={ROUTES.FOOD_LIST}
        component={FoodList}
        options={{ title: 'Items' }}
      />
      <RootStack.Screen
        name={ROUTES.FOOD_DETAILS}
        component={FoodDetails}
        options={{ title: 'Item' }}
      />
    </RootStack.Navigator>
  );
};

export default Stack;
