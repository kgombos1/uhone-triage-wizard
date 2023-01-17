import React from 'react';
import { createTheme } from '@abyss/web/tools/theme';
import { createRouter } from '@abyss/web/tools/router';
import { AbyssProvider } from '@abyss/web/ui/AbyssProvider';
import { Routes } from './routes';

const theme = createTheme('uhg');
const router = createRouter(Routes);

export const browser = () => {
  return <AbyssProvider theme={theme} router={router} />;
};
