import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FoodList from '@screens/food-list';
import FoodDetails from '@screens/food-details';
import { ThemeFont } from '@components/typography';

import ROUTES from './routes';
import { MainStackParamList } from './types';

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
          fontSize: 16,
          ...(ThemeFont.medium as any),
        },
        contentStyle: {
          backgroundColor: '#eee',
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
