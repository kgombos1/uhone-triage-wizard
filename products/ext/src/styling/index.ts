/**
 * File for re-exporting JSS styling utilities and other functions related to generating styled components.
 */

 import {styled} from '@mui/material/styles';
 import {compose, display, flexbox, palette, sizing, spacing} from '@mui/system';
 
 export {default as createCache} from '@emotion/cache';
 
 export {CacheProvider} from '@emotion/react';
 // MUI re-exports
 export {CssBaseline, type Theme, useMediaQuery, useTheme} from '@mui/material';
 export {createTheme, ThemeProvider} from '@mui/material/styles';
 export {TssCacheProvider} from 'tss-react';
 
 export {keyframes} from 'tss-react';
 export {makeStyles} from 'tss-react/mui';
 
 const nonForwardProps = new Set([
   'alignItems',
   'justifyContent',
   'flexDirection',
   'bgColor',
   'maxWidth',
 ]);
 
 /**
  * Adds the MaterialUI system styling props to the component.
  *
  * See [MUI styling system documentation](https://v4.mui.com/system/basics/#all-inclusive)
  *
  * @param component the component to add the styling to
  * @returns the wrapped component that accepts the MaterialUI system styling props
  */
 export const makeStyled = <T extends React.ElementType>(component: T) =>
   // @ts-expect-error -- allow type error for css prop composition
   styled(component, {shouldForwardProp: prop => !nonForwardProps.has(prop)})(
     compose(spacing, palette, sizing, display, flexbox),
   );
 
 /**
  * {@link makeStyled}, but does not add the flexbox props.
  */
 export const makeStyledNoFlex = <T extends React.ElementType>(component: T) =>
   // @ts-expect-error disable -- allow type error for css prop composition
   styled(component, {shouldForwardProp: prop => !nonForwardProps.has(prop)})(
     compose(spacing, palette, sizing, display),
   );
 
 /**
  * {@link makeStyled}, but does not add the palette props
  */
 export const makeStyledNoPalette = <T extends React.ElementType>(component: T) =>
   // @ts-expect-error disable -- allow type error for css prop composition
   styled(component, {shouldForwardProp: prop => !nonForwardProps.has(prop)})(
     compose(spacing, sizing, display),
   );
 