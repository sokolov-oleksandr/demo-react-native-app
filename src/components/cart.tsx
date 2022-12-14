import React, { memo, useState } from 'react';
import styled from '@emotion/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Alert } from 'react-native';

import { COLORS } from '@constants/colors';

import { Container } from './container';
import { CartQuantity } from './cart-quantity';
import { Typography } from './typography';

//
//

export const Cart: React.FC = memo(() => {
  const insets = useSafeAreaInsets();
  const [quantity, setQuantity] = useState<number>(5);
  return (
    <CartContainer style={{ paddingBottom: Math.max(insets.bottom, 20) }}>
      <BuyButton
        onPress={() => Alert.alert('', 'WiP button')}
        underlayColor="white">
        <Typography color="white">Buy Now</Typography>
      </BuyButton>

      <CartQuantity quantity={quantity} update={setQuantity} />
    </CartContainer>
  );
});

//
//

const CartContainer = styled(Container)({
  backgroundColor: 'white',
  flexDirection: 'row-reverse',
  borderTopLeftRadius: 16,
  paddingTop: 16,
  borderTopRightRadius: 16,
});

const BuyButton = styled.TouchableHighlight({
  backgroundColor: COLORS.buttonBackground,
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 1000,
  maxHeight: 51,
  flex: 2,
  alignItems: 'center',
});
