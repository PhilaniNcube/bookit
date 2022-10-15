import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import {useRouter} from 'next/router'
import {
  Hydrate,
  QueryClient,
  DehydratedState ,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  createBrowserSupabaseClient,
  Session,
} from "@supabase/auth-helpers-nextjs";
import { Database } from '../db_types';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from '../components/Navbar';



function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
  dehydratedState?: DehydratedState;
}>) {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient<Database>()
  );

  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Navbar />
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionContextProvider>
  );
}

export default MyApp
