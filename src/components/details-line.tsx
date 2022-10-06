import React from 'react';
import styled from '@emotion/native';
import { StyleSheet } from 'react-native';

import { FONT_SIZES } from '@constants/font-sizes';
import { Typography } from './typography';

//
//

export const DetailsLine: React.FC<{
  label?: React.ReactNode;
  children: string;
}> = ({ label, children }) => {
  return (
    <DetailsLineContainer>
      <Typography
        fontSize={FONT_SIZES.small}
        style={styles.label}
        weight="medium">
        {label}
      </Typography>

      <DetailsLineContent>{children}</DetailsLineContent>
    </DetailsLineContainer>
  );
};

//
//

const styles = StyleSheet.create({
  label: { marginRight: 16 },
});

const DetailsLineContainer = styled.View({
  marginVertical: 5,
  flexDirection: 'row',
});

const DetailsLineContent = styled(Typography)({
  flex: 1,
  textAlign: 'right',
});

DetailsLineContent.defaultProps = {
  fontSize: 14,
};
