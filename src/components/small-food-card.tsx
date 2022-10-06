import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styled from '@emotion/native';

import { getImage } from '@utils/image';
import { Typography } from '@components/typography';
import { MainStackParamList } from '@navigation/types';
import { IListItem } from '@screens/food-list';
import { Avatar } from '@components/avatar';
import ROUTES from '@navigation/routes';
import { COLORS } from '@constants/colors';
import { FONT_SIZES } from '@constants/font-sizes';

//
//

const thumbnailSize = 600;

interface ISmallFoodCardProps {
  item: IListItem;
}

export const SmallFoodCard: React.FC<ISmallFoodCardProps> = ({ item }) => {
  const nav =
    useNavigation<
      NativeStackNavigationProp<MainStackParamList, ROUTES.FOOD_DETAILS>
    >();

  return (
    <ListItemContainer onPress={() => nav.navigate(ROUTES.FOOD_DETAILS, item)}>
      <Avatar
        style={styles.image}
        source={{ uri: getImage(thumbnailSize, item.id) }}
      />

      <View style={styles.flex}>
        <Typography weight="medium">{item.name}</Typography>
        {!item.salePrice ? (
          <Typography style={item.salePrice ? styles.discounted : undefined}>
            SAR {item.price}
          </Typography>
        ) : null}

        {item.salePrice ? (
          <Typography color={COLORS.primaryText}>
            <Typography style={item.salePrice ? styles.discounted : undefined}>
              SAR {item.price}
            </Typography>
            {'  '}SAR {item.salePrice}
          </Typography>
        ) : null}

        <Typography fontSize={FONT_SIZES.small} color={COLORS.brandText}>
          Brand: {item.name}
        </Typography>
      </View>
    </ListItemContainer>
  );
};

//
//

const ListItemContainer = styled.TouchableOpacity({
  paddingTop: 10,
  paddingBottom: 10,
  paddingHorizontal: 25,
  borderBottomColor: 'rgba(0,0, 0, 0.05)',
  borderBottomWidth: 1,
  flexDirection: 'row',
});

//
//

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  image: {
    marginTop: 8,
    marginRight: 16,
  },
  discounted: {
    textDecorationLine: 'line-through',
  },
  sale: {
    color: COLORS.primaryText,
  },
});
