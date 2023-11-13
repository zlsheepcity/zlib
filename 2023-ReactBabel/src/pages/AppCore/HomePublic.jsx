import React from 'react';
import { PageContainer } from 'Components';

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ MUI
import {
    Container,
} from '@mui/material';
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ /MUI

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Page = () => {
  return (
    <PageContainer>

        <h1>HomePublicPage</h1>
        <ul>
          <li><a href="/">HomePublicPage</a></li>
          <li><a href="/TemplateUI">TemplateUI</a></li>
        </ul>

    </PageContainer>
  );
};
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

export const   HomePublic = Page;
export default HomePublic;
