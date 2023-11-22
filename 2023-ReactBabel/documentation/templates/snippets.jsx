// 2023.11.22
import React from 'react';
import { PageContainer } from 'Components';

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Parts
import {
  CadastreSearchInput,
  CadastreSearchOutput,
} from 'Pages/CadastreSearch';

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ MUI
import {
//Layout
  Container,
  Box,
  Stack,
//Inputs
  TextField,
  Button,
} from '@mui/material';
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ /MUI

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Component = ComponentProps => {
  const {
    cadastreNumber = '',
  } = ComponentProps || {};

  const [inputValue, inputValueSet] = React.useState('');

  const inputValueSetAction = React.useCallback(
    (v) => inputValueSet(v)
    ,[inputValueSet]
  );

  return (
    <PageContainer>

      <CadastreSearchInput
        value  = {inputValue}
        action = {inputValueSetAction}
        />

    </PageContainer>
  );
};
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

export const   CadastreSearchPage = Component;
export default CadastreSearchPage ;
