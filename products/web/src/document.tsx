import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export const document = () => {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
