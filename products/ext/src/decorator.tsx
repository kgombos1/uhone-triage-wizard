import React from 'react';
import { createTheme } from '@abyss/web/tools/theme';
import { ThemeProvider } from '@abyss/web/ui/ThemeProvider';

const theme = createTheme('uhg');

export const decorator = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};
