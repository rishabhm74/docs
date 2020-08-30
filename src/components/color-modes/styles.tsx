/** @jsx jsx */
import * as React from 'react';
import { jsx, css, Global } from '@emotion/react';
import { theme, generateCssVariables } from '@stacks/ui';

// /** @jsx jsx */
// import * as React from 'react';
// import { jsx, css, Global } from '@emotion/react';
// import { theme, generateCssVariables } from '@stacks/ui';
//
// export const colorModeStyles = css`
//   :root {
//     ${generateCssVariables('light')({ colorMode: 'light', theme })};
//     --colors-highlight-line-bg: rgba(255, 255, 255, 0.08);
//   }
//
//   * {
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }
//
//   @media (prefers-color-scheme: dark) {
//     :root {
//       ${generateCssVariables('dark')({ colorMode: 'dark', theme })};
//       --colors-highlight-line-bg: rgba(255, 255, 255, 0.04);
//     }
//     * {
//       -webkit-font-smoothing: subpixel-antialiased;
//       -moz-osx-font-smoothing: auto;
//     }
//   }
//
//   @media (prefers-color-scheme: light) {
//     :root {
//       ${generateCssVariables('light')({ colorMode: 'light', theme })};
//       --colors-highlight-line-bg: rgba(255, 255, 255, 0.08);
//     }
//     * {
//       -webkit-font-smoothing: antialiased;
//       -moz-osx-font-smoothing: grayscale;
//     }
//   }
//
//
//
//   input:-webkit-autofill,
//   input:-webkit-autofill:hover,
//   input:-webkit-autofill:focus,
//   textarea:-webkit-autofill,
//   textarea:-webkit-autofill:hover,
//   textarea:-webkit-autofill:focus,
//   select:-webkit-autofill,
//   select:-webkit-autofill:hover,
//   select:-webkit-autofill:focus {
//     -webkit-text-fill-color: var(--colors-text-body);
//     font-size: 16px !important;
//     transition: background-color 5000s ease-in-out 0s;
//   }
//
//   input:-ms-input-placeholder,
//   textarea:-ms-input-placeholder {
//     color: var(--colors-input-placeholder) !important;
//   }
//
//   input::-ms-input-placeholder,
//   textarea::-ms-input-placeholder {
//     color: var(--colors-input-placeholder) !important;
//   }
//
//   input::placeholder,
//   textarea::placeholder {
//     color: var(--colors-input-placeholder) !important;
//   }
// `;
//
// export const ColorModes = <Global styles={colorModeStyles} />;

export const ColorModes = (
  <Global
    styles={css`
      // :root {
      //   ${generateCssVariables('light')({ colorMode: 'light', theme })};
      //   --colors-highlight-line-bg: rgba(255, 255, 255, 0.08);
      // }

      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
        html,
  body,
  #__next {
    background: var(--colors-bg);
    border-color: var(--colors-border);

    &.light {
      ${generateCssVariables('light')({ colorMode: 'light', theme })};
      --colors-highlight-line-bg: rgba(255, 255, 255, 0.08);
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    }
    &.dark {
      ${generateCssVariables('dark')({ colorMode: 'dark', theme })};
      --colors-highlight-line-bg: rgba(255, 255, 255, 0.04);
      * {
        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: auto;
      }
    }
  }
    `}
  />
);
