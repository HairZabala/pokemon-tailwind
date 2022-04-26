import React, { useState, useEffect } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import localFavorite from "../../utils/localFavorite";
import { FavoritePokemons } from "../../components/pokemon";

const FavoritePage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorite.pokemons());
  }, []);

  return (
    <Layout title="Pokemon favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritePage;
