import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ThemeFont} from '@components/typography';
import ListScreen from '@screens/list';
import Item from '@screens/item';

import ROUTES from './routes';
import {MainStackParamList} from './types';

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
        name={ROUTES.ROOT_LIST_SCREEN}
        component={ListScreen}
        options={{title: 'Items'}}
      />
      <RootStack.Screen
        name={ROUTES.LIST_SCREEN_ITEM}
        component={Item}
        options={{title: 'Item'}}
      />
    </RootStack.Navigator>
  );
};

export default Stack;
