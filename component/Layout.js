import React, { useContext } from "react";
import Head from "next/head";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Switch
} from "@material-ui/core";
// import { CssBaseline } from "@mui/material";
import useStyles from "util/style";
import NextLink from "next/link";
import { DarkContext } from "@/util/store";
const Layout = ({ title, description, children }) => {
  const classes = useStyles();
  const {state,dispatch} = useContext(DarkContext);
  const {darkMode} =state
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: darkMode ? "dark" :"light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });

  const darkModehandler = () => {
    dispatch({type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON"})
  }
  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Next Ecommerce` : `Next Ecommerce app`}{" "}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                {" "}
                <Typography className={classes.brand}>Tonaz</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch checked={darkMode} onChange={darkModehandler}></Switch>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/cart" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container>{children}</Container>
        <footer className={classes.footer}>
          All copyright reserved, Next e-commerce
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
