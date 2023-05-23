// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { Provider } from "react-redux";
// import { Toaster } from "react-hot-toast";
// import { store } from "../redux/store";

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <Provider store={store}>
//       <Toaster />
//       <Component {...pageProps} />
//     </Provider>
//   );
// }

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    // Higher order component
    <SessionProvider session={session}>
      <Provider store={store}>
        <Toaster />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
