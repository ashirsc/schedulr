import { MantineProvider, MantineTheme, MantineThemeOverride, useMantineTheme } from "@mantine/core";
import React, { useEffect, useState } from "react";

import { AppTheme } from "./App.context";
import { BrowserRouter } from "react-router-dom";
import { NotificationsProvider } from "@mantine/notifications";
import { useLocalStorage } from "@mantine/hooks";

const defaultMantineProps = {
    Container: {
        sizes: {
            xs: 540,
            sm: 720,
            md: 960,
            lg: 1140,
            xl: 1320,
        },
    },
};

interface AppWrapperProps {
    children: React.ReactNode;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
    const colorSchemeKey = "theme.colorScheme";
    const [appTheme, setAppTheme] = useState<MantineThemeOverride>(useMantineTheme());

    // useEffect(() => {
    //     if (localStorage.getItem(colorSchemeKey) == undefined) {
    //         localStorage.setItem(colorSchemeKey, "dark");
    //     }
    //     const storedTheme: MantineThemeOverride = { colorScheme: localStorage.getItem(colorSchemeKey) as "dark" | "light" };
    //     setAppTheme(storedTheme);
    // });

    // useEffect(() => {
    //     localStorage.setItem(colorSchemeKey, appTheme.colorScheme as string);
    // }, [appTheme]);

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS defaultProps={defaultMantineProps} theme={appTheme}>
            <NotificationsProvider>
                <BrowserRouter>
                    <AppTheme.Provider value={{ setTheme: setAppTheme }}>{children}</AppTheme.Provider>
                </BrowserRouter>
            </NotificationsProvider>
        </MantineProvider>
    );
};
