import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {TextInput, Checkbox, Button, Group, Box, AppShell, Navbar, Header, Title} from '@mantine/core';

import Form from "@rjsf/core";
import {ThemeSchema} from "./schemas/theme.schema";
import {ColorPaletteSchema} from "./schemas/color-pallete.schema";
import {ColorPaletteUiSchema} from "./schemas/color-pallete.uischema";
import {useCallback, useContext, useEffect, useState} from "react";

import {generateColorSwatch} from "../utils/generateColorSwatch";
import {getThemes, saveTheme} from "../api/themes";
import {ThemeContext} from "./theme-context";

function CustomArrayFieldTemplate(props) {
    const {id, idSchema, items, canAdd, title, classNames, label, help, required, description, errors, children} = props;
    return (
        <div>
            <div className={`${styles.containerInner} ${styles.colorsForm}`}>

                {items.map(element =>
                    <>
                        <div key={element.key}>{element.children} </div>
                    </>

                )}
                {canAdd && <button type="button" onClick={props.onAddClick}></button>}
            </div>
        </div>


    );
}

function CustomFieldTemplate(props) {
    const {id, classNames, label, help, required, description, errors, children} = props;
    return (
        <div className={classNames}>
            <Title order={4}>{label}</Title>
            {description}
            {children}
            {errors}
            {help}
        </div>
    );
}
const applyStyles = (theme) => {
    const colorScheme = theme.colorScheme;
    if(!theme.colors[colorScheme]) {
        return {}
    }
    const main = colorScheme ? theme.colors[colorScheme][0] : 'dark';
    return{
        main: { backgroundColor: main },
    }
}

export default function Home() {

    const [colorPalette, setColorPalette] = useState({});
    const [themePalette, setThemePalette] = useState({});
    const [nav, setNav] = useState([]);

    useEffect(() => {
        const theme = getThemes();
        theme.then((data) => {
            setNav(data);
        })
    }, [])
    const {theme, setTheme} = useContext(ThemeContext);

    const propagateColorSwatches = useCallback((state) => {

        const colorPalettes = Object.keys(colorPalette);

        const newPalette = {}
        for(const color of colorPalettes) {


            newPalette[color] = Object.values(generateColorSwatch(colorPalette[color][0]));

            // newPalette[color] = newPalette[color].map((c) => c.slice(1) )
            console.log("Propagating colors2", newPalette[color]);

        }
        setColorPalette(newPalette);
    })



  return (
      <AppShell
          padding="md"
          navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{ nav.map((t) => <div onClick={()=> {
              setTheme(t);
              setThemePalette(t);
              setColorPalette(t.colors);
          }}>{t.themeName}</div>)}</Navbar>}
          header={<Header height={60} p="xs">{/* Header content */}</Header>}
          styles={applyStyles}
      >
          <main>
              <button onClick={() => propagateColorSwatches(colorPalette)}>Generate colors</button>

              <div className={styles.container}>
                <div className={styles.containerInner}>
                    <Form schema={ThemeSchema}

                          onSubmit={(data) => {
                              const newTheme = { ...data.formData, colors: colorPalette}
                              setThemePalette(newTheme)
                              saveTheme(newTheme);

                          }}

                          ArrayFieldTemplate={CustomArrayFieldTemplate}
                          FieldTemplate={CustomFieldTemplate}
                          // onChange={(data) => setTheme(data.formData)}

                          onError={(e) => console.log(e)}
                          formData={themePalette}
                    />
                </div>
                    <Form schema={ColorPaletteSchema}
                          className={styles.container}
                          uiSchema={ColorPaletteUiSchema}

                          ArrayFieldTemplate={CustomArrayFieldTemplate}
                          FieldTemplate={CustomFieldTemplate}
                          onSubmit={(data) => {
                              // const newTheme = {...themePalette, colors: colorPalette};
                              setColorPalette(data.formData)
                              // setThemePalette(newTheme)
                          }}
                          // onChange={(data) => setColorPalette(data.formData)}
                          onError={(e) => console.log(e)}
                          formData={colorPalette}

                    />
            </div>
            <div>
                <Title order={1}>This is h1 title</Title>
                <Title order={2}>This is h2 title</Title>
                <Title order={3}>This is h3 title</Title>
                <Title order={4}>This is h4 title</Title>
                <Title order={5}>This is h5 title</Title>
                <Title order={6}>This is h6 title</Title>
                <p>This is some text</p>
                <Button>Primary button</Button>
                <Button  sx={(theme) => ({
                    // subscribe to color scheme changes
                    backgroundColor: theme.colors.red[8],

                    // or use any other static values from theme
                    color: theme.colors.gray[1],
                    fontSize: theme.fontSizes.sm,
                    fontWeight: 500,
                })}>Blue button</Button>
            </div>
          </main>

        <footer className={styles.footer}>
          <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
          </a>
        </footer>

      </AppShell>

  )

}


