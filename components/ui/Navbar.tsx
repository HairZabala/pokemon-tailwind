import Image from "next/image";
import NextLink from "next/link";
import React from "react";

export const Navbar = () => {

  return (
    <div className="w-full flex items-center justify-center px-20">
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Icono de la app"
        width={70}
        height={70}
      />

      <NextLink href="/" passHref>
        <div className="flex justify-center items-center">
          <div className="text-black text-2xl font-medium">
            P
          </div>
          <div className="text-black text-lg">
            okémon
          </div>
        </div>
      </NextLink>

      <div className="flex-1" />
      <NextLink href={"/favorites"} passHref>
        <div className="">
          Favoritos
        </div>
      </NextLink>
    </div>
  );
};
