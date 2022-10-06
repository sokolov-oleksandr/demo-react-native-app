import React, { memo } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ListData from '@utils/fake-data';
import { SmallFoodCard } from '@components/small-food-card';

//
//

const keyExtractor = (item: IListItem): string => item.id;

export interface IListItem {
  id: string;
  name: string;
  description: String;
  price: string;
  salePrice: any;
  brand: string;
}

const FoodList = memo(() => {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <FlatList
        renderItem={({ item }) => <SmallFoodCard item={item} />}
        data={ListData}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
});

export default FoodList;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
  },
});
