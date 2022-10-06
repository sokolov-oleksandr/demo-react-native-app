import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ListData from '@utils/fake-data';
import {SmallFoodCard} from '@components/small-food-card';

//
//

export interface IListItem {
  id: string;
  name: string;
  description: String;
  price: string;
  salePrice: any;
  brand: String;
}

const FoodList = () => {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={{paddingHorizontal: 16}}>
        {ListData.map(item => (
          <SmallFoodCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodList;
