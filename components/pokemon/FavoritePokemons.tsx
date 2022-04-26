import React, { FC } from "react";
import { FavoriteCardPokemon } from ".";

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <div className="fadeIn mb-10 grid gap-4 grid-cols-2 md:grid-cols-4 lg:md:grid-cols-6">
      {pokemons.map((id) => (
        <FavoriteCardPokemon id={id} key={id} />
      ))}
    </div>
  );
};
