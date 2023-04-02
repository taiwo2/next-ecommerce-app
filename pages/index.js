import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Layout from "@/component/Layout";
import {
  Card,
  CardActions,
  CardMedia,
  Grid,
  Typography,
  CardActionArea,
  Button,
} from "@material-ui/core";
import data from "@/util/data";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <h1>products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={3} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                  </CardActionArea>
                  <CardActions>
                    <Typography>
                      <Button size="small" color="primary">
                        ${product.price} Add to Cart
                      </Button>
                    </Typography>
                  </CardActions>
                </NextLink>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Layout>
    </>
  );
}
