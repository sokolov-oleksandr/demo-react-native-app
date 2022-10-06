import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import styled from '@emotion/native';

import { COLORS } from '@constants/colors';

import { Typography } from './typography';

//
//

export const CartQuantity: React.FC<{
  quantity: any;
  update: Dispatch<SetStateAction<number>>;
}> = ({ quantity, update }) => {
  const incrementQuantity = useCallback(
    () => update(currentValue => currentValue + 1),
    [update],
  );
  const decrementQuantity = useCallback(
    () => update(currentValue => currentValue - 1),
    [update],
  );
  return (
    <QuantityContainer>
      <React.Fragment>
        <QuantityButton
          onPress={incrementQuantity}
          underlayColor={COLORS.border}>
          <Typography color={COLORS.secondaryText}>+</Typography>
        </QuantityButton>

        <Typography style={styles.quantity}>{quantity}</Typography>

        <QuantityButton
          onPress={decrementQuantity}
          underlayColor={COLORS.border}>
          <Typography color={COLORS.secondaryText}>-</Typography>
        </QuantityButton>
      </React.Fragment>
    </QuantityContainer>
  );
};

//
//

const styles = StyleSheet.create({
  quantity: { textAlign: 'center', flex: 1 },
});

const QuantityButton = styled.TouchableHighlight({
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
  width: 40,
  height: 40,
});

const QuantityContainer = styled.TouchableHighlight({
  borderWidth: 1,
  borderColor: COLORS.border,
  marginRight: 10,
  flex: 4,
  paddingVertical: 0,
  paddingHorizontal: 5,
  borderRadius: 1000,
  maxHeight: 51,
  alignItems: 'center',
  flexDirection: 'row',
});
