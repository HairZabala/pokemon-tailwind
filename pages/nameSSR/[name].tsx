import React, { FC, useState, useEffect } from "react";
import { Layout } from "../../components/layouts";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import pokeApi from "../../api/pokeApi";
import { Pokemon } from "../../interfaces";
import { localFavorites, getPokemonInfo } from "../../utils";
import confetti from "canvas-confetti";
import { PokemonListResponse } from "../../interfaces/pokemon-list";
import Image from "next/image";

interface Props {
  pokemon: Pokemon;
}

// GetServerSideProps will get data on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.query;

  if (typeof name !== "string") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const pokemon = await getPokemonInfo(name);

  return { props: { pokemon } };
};

const PokemonByNameSSRPage: FC<Props> = ({ pokemon }) => {
  const [isInFavorite, setIsInFavorite] = useState(false);

  const onToggleFavorite = () => {
    localFavorites.toogleFavorite(pokemon.id);
    setIsInFavorite(!isInFavorite);

    if (!isInFavorite) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  };

  useEffect(() => {
    setIsInFavorite(localFavorites.existInFavorites(pokemon.id));
  }, [pokemon.id]);

  return (
    <Layout title={pokemon.name}>
      <div className="mt-20 grid grid-cols-12 gap-2 ">
        <div className="col-span-12 sm:col-span-4 shadow-lg rounded-lg">
          <div className="p-10 text-center">
            <Image src={pokemon.sprites.other?.dream_world.front_default || "/no-image.png"} alt={pokemon.name} width={200} height={200} />
          </div>
        </div>

        <div className="p-6 col-span-12 sm:col-span-8 shadow-lg">
          <div className="flex justify-between">
            <div className="pt-2 font-bold text-3xl capitalize">{pokemon.name}</div>

            <div className="bg-gray-800 p-2 text-white hover:bg-gray-900 cursor-pointer rounded-lg" onClick={onToggleFavorite}>
              {isInFavorite ? "En Favoritos" : "Guardar en favoritos"}
            </div>
          </div>

          <div>
            <div className="text-lg font-bold my-10">Sprites:</div>
            <div className="flex justify-between">
              <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
              <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
              <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
              <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PokemonByNameSSRPage;
