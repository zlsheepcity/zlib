import React from 'react';
import { PageContainer } from 'Components';

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
const Page = () => {
  return (
    <PageContainer>

      <h1>TemplateUI</h1>
      <ul>
        <li><a href="/">HomePublicPage</a></li>
        <li><a href="/TemplateUI">TemplateUI</a></li>
      </ul>

      <h4>Common combos</h4>
      <Stack spacing={2} direction="row">
        <TextField
          label="TextField"
          value="Value"
          />
        <Button
          variant="contained"
          children={'Button'}
          />
      </Stack>

      <h4>Docs</h4>
      <ul>
        <li>
          MUI Components:
          <a href="https://mui.com/material-ui/react-text-field/">
                   https://mui.com/material-ui/react-text-field/
          </a>
        </li>
      </ul>

    </PageContainer>
  );
};
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

export const   TemplateUI = Page;
export default TemplateUI;
