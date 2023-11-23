// 2023.11.22
import React from 'react';
import {
  Container,Box,Stack, //Layout
  TextField,Button,    //Inputs
} from '@mui/material';

import { PageContainer } from 'Components';
import {
  CadastreSearchInput,
  CadastreSearchOutput,
} from 'Pages/CadastreSearch';

const txt = {
  InputLabel: 'Cadastre number',
  ButtonText: 'Search',
};

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const RenderDataObject = ({
  data = {},
}) => {
  return <></>;
};

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Component = ComponentProps => {
  const {
    cadastreNumber = '',
  } = ComponentProps || {};

  const [inputValue, inputValueSet] = React.useState('');
  const [loading, loadingSet] = React.useState(false);

  const inputValueSetAction = React.useCallback(
    (v) => inputValueSet(v)
    ,[inputValueSet]
  );

  // Run
  React.useEffect(() => {
      dataLoad();
  },[cadastreNumber]);
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
