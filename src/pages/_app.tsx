import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ApolloProvider } from '@apollo/client';
// import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
// import { reactQueryClient } from '#/utils/reactQueryClient';
import { apolloClient } from '#/graphql/apolloClient';
import theme from '#/theme';
import { trpc } from '#/utils';

import '../styles/globals.css';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        {/*  <QueryClientProvider client={reactQueryClient}>*/}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
        {/*</QueryClientProvider>*/}
      </ApolloProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
