import React, { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
  id: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ id }) => {
  const router = useRouter();

  return (
    <div
      className="p-1 shadow-lg flex flex-col rounded-lg border border-gray-200"
      onClick={() => router.push(`/pokemon/${id}`)}
    >
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width={"100%"}
        height={140}
      />
    </div>
  );
};
