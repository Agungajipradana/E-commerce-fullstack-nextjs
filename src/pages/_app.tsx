import AppShell from "@/components/layouts/AppShell";
import "@/styles/main.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "@/utils/redux/store";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </Provider>
    </SessionProvider>
  );
}
