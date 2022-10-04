import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styled from '@emotion/native';

import {RootStackParamList} from './stack';
import {getImage} from './utils/image';
import {Container} from './components/container';
import {Typography} from './components/typography';

//
//

//

export const Item = () => {
  const nav =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'ListScreen'>
    >();
  const {params} = useRoute<RouteProp<RootStackParamList, 'ItemScreen'>>();

  if (!params) {
    return <Typography>Loading ...</Typography>;
  }

  nav.setOptions({
    title: params.name,
  });

  //
  //

  return (
    <React.Fragment>
      <ScrollView>
        <Container>
          <ItemImage
            source={{uri: getImage(900, params.id)}}
            size={Dimensions.get('screen').width * 0.9}
          />
        </Container>

        <Container>
          <Typography fontSize={18} weight="semiBold">
            {params.name}
          </Typography>

          {params.salePrice ? (
            <Typography fontSize={18} color="red">
              <ItemDiscountedPrice>SAR {params.price}</ItemDiscountedPrice>
              {'  '}
              SAR {params.price}
            </Typography>
          ) : (
            <Typography fontSize={18}>SAR {params.price}</Typography>
          )}
        </Container>
      </ScrollView>
    </React.Fragment>
  );
};

//
//

const ItemImage = styled.Image<{size: number}>(props => ({
  width: props.size,
  height: props.size,
  marginVertical: 16,
  paddingHorizontal: '5%',
  borderRadius: 9,
}));

const ItemDiscountedPrice = styled(Typography)({
  textDecorationLine: 'line-through',
});

ItemDiscountedPrice.defaultProps = {
  fontSize: 18,
  color: 'black',
};
