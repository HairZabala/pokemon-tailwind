import type { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts/Layout";
import pokeApi from "../api/pokeApi";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon list">
      <div className="fadeIn mb-10 grid gap-4 grid-cols-2 md:grid-cols-4 lg:md:grid-cols-6">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {
  // const { data } = await // your fetch function here
  const resp = await pokeApi.get<PokemonListResponse>("/pokemon?&limit=151");

  const pokemons: SmallPokemon[] = resp.data.results.map((pokemon) => {
    const splitName = pokemon.url.split("/");
    const id = Number(splitName[splitName.length - 2]);
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

    return {
      ...pokemon,
      img,
      id,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};



export default HomePage
