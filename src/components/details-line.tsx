import React from 'react';
import styled from '@emotion/native';

import { Typography } from './typography';
import { StyleSheet } from 'react-native';

//
//

export const DetailsLine: React.FC<{
  label?: React.ReactNode;
  children: string;
}> = ({ label, children }) => {
  return (
    <DetailsLineContainer>
      <Typography fontSize={14} style={styles.label} weight="medium">
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
