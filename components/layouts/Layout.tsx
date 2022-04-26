import Head from "next/head";
import React, { Children, FC } from "react";
import { Navbar } from "../ui";

interface Props {
  title?: string;
  children: JSX.Element | JSX.Element[] | null | null[]
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon APP"}</title>
        <meta name="author" content="Hair Zabala | Juan Palomino" />
        <meta
          name="description"
          content={`Information about this pokemon: ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Information about ${title}`} />
        <meta
          property="og:description"
          content={`This page describes information about ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />
      <main className="px-10">
        {children}
      </main>
    </>
  );
};
