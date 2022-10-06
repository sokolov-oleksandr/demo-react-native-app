import React, { useEffect, useCallback, memo } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styled from '@emotion/native';
import { faker } from '@faker-js/faker';

import { MainStackParamList } from '@navigation/types';
import ROUTES from '@navigation/routes';

import { getImage } from '@utils/image';
import { Container } from '@components/container';
import { Typography } from '@components/typography';
import { DetailsLine } from '@components/details-line';
import { DetailsTitle } from '@components/details-title';
import { Cart } from '@components/cart';
import { FONT_SIZES } from '@constants/font-sizes';

//
//

const SPEC_1 = faker.color.human();
const SPEC_2 = faker.vehicle.vin();
const SPEC_3 = faker.commerce.product();
const SPEC_4 = faker.datatype.float({ min: 0.1, max: 10, precision: 0.1 });

//

const FoodDetails = memo(() => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<MainStackParamList, ROUTES.FOOD_LIST>
    >();
  const { params } =
    useRoute<RouteProp<MainStackParamList, ROUTES.FOOD_DETAILS>>();

  const setNavigationOptions = useCallback(() => {
    if (!params?.name) {
      return;
    }
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params]);

  useEffect(() => {
    setNavigationOptions();
  }, [setNavigationOptions]);

  if (!params) {
    return <Typography>Loading ...</Typography>;
  }

  //
  //

  return (
    <React.Fragment>
      <ScrollView>
        <Container>
          <ItemImage
            source={{ uri: getImage(900, params.id) }}
            size={Dimensions.get('screen').width - 50}
          />
        </Container>

        <Container>
          <Typography fontSize={FONT_SIZES.large} weight="semiBold">
            {params.name}
          </Typography>

          {params.salePrice ? (
            <Typography fontSize={FONT_SIZES.large} color="red">
              <ItemDiscountedPrice>SAR {params.price}</ItemDiscountedPrice>
              {'  '}
              SAR {params.price}
            </Typography>
          ) : (
            <Typography fontSize={FONT_SIZES.large}>
              SAR {params.price}
            </Typography>
          )}
        </Container>

        <Container>
          <Typography fontSize={FONT_SIZES.base}>
            {params.description}
          </Typography>
        </Container>

        <Container>
          <DetailsTitle>Details</DetailsTitle>
          <DetailsLine label="Brand">{params.brand}</DetailsLine>
          <DetailsLine label="Color">{SPEC_1}</DetailsLine>
          <DetailsLine label="SKU">{SPEC_2}</DetailsLine>

          <Typography weight="medium" />
          <Typography weight="medium">Specifications</Typography>
          <DetailsLine label="Type">{SPEC_3}</DetailsLine>
          <DetailsLine label="Weight">{`${SPEC_4} kg`}</DetailsLine>
        </Container>
      </ScrollView>

      <Cart />
    </React.Fragment>
  );
});

//
//
export default FoodDetails;

const ItemImage = styled.Image<{ size: number }>(props => ({
  width: props.size,
  height: props.size,
  borderRadius: 8,
  marginTop: 10,
  alignSelf: 'center',
}));

const ItemDiscountedPrice = styled(Typography)({
  textDecorationLine: 'line-through',
});

ItemDiscountedPrice.defaultProps = {
  fontSize: FONT_SIZES.large,
  color: 'black',
};
