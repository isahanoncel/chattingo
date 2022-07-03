import React from "react";
import App from "next/app";
import { AppContext, AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "@styles/fonts.css";
import { GlobalStyle } from "@styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import { parse } from "next-useragent";
import AppProvider from "@store/app/index";
import { NextRouter } from "next/router";
import Header from "@components/Header";
import Footer from "@components/Footer";

interface PageProps {
    query?: NextRouter;
    device?: "ios" | "android" | "desktop" | string;
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <AppProvider state={{ device: pageProps.device }}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </AppProvider>
    );
}

MyApp.getInitialProps = async (ctx: AppContext) => {
    const appProps = await App.getInitialProps(ctx);
    const pageProps: PageProps = {};
    pageProps.query = ctx.router;

    const ua = parse(ctx.ctx.req?.headers["user-agent"] as string);
    pageProps.device =
        (ua.isDesktop && "desktop") ||
        (ua.isAndroid && "android") ||
        (ua.isIos && "ios") ||
        "desktop";

    return {
        ...appProps,
        pageProps,
    };
};

export default appWithTranslation(MyApp);
