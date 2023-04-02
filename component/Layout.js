import React from "react";
import Head from "next/head";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
} from "@material-ui/core";
import useStyles from "util/style";
import NextLink from "next/link";

const Layout = ({ title,description,children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Ecommerce` : `Next Ecommerce app`} </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
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
            <NextLink href="/cart" passHref>
              <Link>
                Cart
              </Link>
            </NextLink>
            <NextLink href="/cart" passHref>
              <Link>
                Login
              </Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer className={classes.footer}>
        All copyright reserved, Next e-commerce
      </footer>
    </div>
  );
};

export default Layout;
