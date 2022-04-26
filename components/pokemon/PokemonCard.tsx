import React, { FC } from "react";
import { SmallPokemon } from "../../interfaces";
// import { Grid, Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
  pokemon: SmallPokemon;
}
export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { name, img, id } = pokemon;

  const router = useRouter();

  const handleClick = () => {
    // console.log(`/pokemon/${id}`);
    router.push(`/name/${name}`);
    // router.push(`/pokemon/${id}`);
  };

  return (
    // <div className="grid">
    //   {pokemon.name}
    // </div>
    <div onClick={handleClick}>
      <div className="p-1 shadow-lg flex flex-col rounded-lg border border-gray-200 hover:scale-105 ease-in-out duration-300">
        <Image src={img} width={140} height={140} alt="" />
        <div className="mt-4 flex justify-between px-4">
          <div className="capitalize">{name}</div>
          <div>#{id}</div>
        </div>
      </div>
    </div>
    //   <Card hoverable clickable onClick={handleClick}>
    //     <Card.Body css={{ p: 1 }}>
    //       <Card.Image src={img} width="100%" height={140} />
    //       <Card.Footer>
    //         <Row justify="space-between">
    //           <Text transform="capitalize">{name}</Text>
    //           <Text>#{id}</Text>
    //         </Row>
    //       </Card.Footer>
    //     </Card.Body>
    //   </Card>
  );
};
