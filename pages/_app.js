import '../styles/globals.css'


import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

import { ThemeContext, ThemeProvider } from "./theme-context";
import {useContext, useState} from "react";

export const Themator = ({ children}) => {

    const ctx = useContext(ThemeContext);

    console.log(ctx.theme);
    return children.map((child) => {
        if(typeof child == 'function'){
            return child(ctx.theme)
        }
    })
}

export default function MyApp({ Component, pageProps }) {

    console.log("Prop", JSON.stringify(pageProps));

    const [theme, setTheme] = useState({});

    return (
      <>
        <Head>
          <title>Page title</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
          <ThemeProvider value={{theme, setTheme}}>
              <Themator> {
                  (theme) =>
                      <MantineProvider
                          withGlobalStyles
                          withNormalizeCSS
                          theme={{
                              /** Put your mantine theme override here */
                              ...theme,
                              // colorScheme: 'dark',
                              // fontFamily: 'Verdana, sans-serif',
                              // fontFamilyMonospace: 'Monaco, Courier, monospace',
                              headings: { fontFamily: theme?.headings?.fontFamily },
                          }}
                      >
                          <Component {...pageProps} />
                      </MantineProvider>

              }

              </Themator>

          </ThemeProvider>

      </>
  );
}
