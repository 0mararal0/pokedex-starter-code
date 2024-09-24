import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClimbingBoxLoader";

export const PokemonPage = () => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setPokemonDetails(null); //para que salga l spiner cuando se cambia de pokemon, sino se queda la imagen anerior hasta que carga
    getData();
  }, [params.pokeName]);
  const getData = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.pokeName}`
      );
      const data = await response.json();
      setPokemonDetails(data);
    } catch (error) {
      console.log(error);
      navigate("/Error");
    }
  };
  if (pokemonDetails === null) {
    return (
      <div>
        <ClipLoader />
      </div>
    );
  }
  return (
    <div>
      <h4>Detalles de Pokemon</h4>
      <div>
        <h3>{pokemonDetails.name}</h3>
        <img src={pokemonDetails.sprites.front_default} alt="" />
      </div>
    </div>
  );
};
