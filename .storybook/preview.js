import "../styles/globals.css";
import { MantineProvider } from '@mantine/core';


export const parameters = () => ({
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  multiTheme:
      {
        list: [
          {
            name: "Light",
            class: "light-theme", // this is handy if you set theme styles based on parent css class
            iconColor: "#fff",
            backgroundColor: `#fff`,
            selectedByDefault: true,
            wrapperComponent: ({children}) => {
              return <MantineProvider
                  withGlobalStyles
                  withNormalizeCSS
                  theme={{
                    /** Put your mantine theme override here */
                    colorScheme: 'light',
                    fontFamily: 'Verdana, sans-serif',
                    fontFamilyMonospace: 'Monaco, Courier, monospace',
                    headings: { fontFamily: 'Greycliff CF, sans-serif' },
                  }}
              >{children} </MantineProvider>
            }
          },
          {
            name: "Dark",
            class: "dark-theme",
            iconColor: "#1E2125",
            backgroundColor: `#1E2125`,
            wrapperComponent: ({children}) => {
              return <MantineProvider
                  withGlobalStyles
                  withNormalizeCSS
                  theme={{
                    /** Put your mantine theme override here */
                    colorScheme: 'dark',
                    fontFamily: 'Verdana, sans-serif',
                    fontFamilyMonospace: 'Monaco, Courier, monospace',
                    headings: { fontFamily: 'Greycliff CF, sans-serif' },
                  }}
              >{children} </MantineProvider>
            }
          }
        ]
      }
})

