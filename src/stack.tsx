import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ListScreen from './screens/list';

//
//

export type RootStackParamList = {
  ListScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Stack = () => {
  return (
    <RootStack.Navigator initialRouteName="ListScreens" options={{title: 'Items'}}>
      <RootStack.Screen name="ListScreen" component={ListScreen} />
    </RootStack.Navigator>
  );
};

export default Stack;
