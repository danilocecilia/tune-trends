'use client';

import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A description of my app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ChakraProvider>
          <SessionProvider>{children}</SessionProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
