import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [allPokemon, setAllpokemon] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setAllpokemon(data.results);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Clausula de guardia, se puede hacer como ternaria tb en la renderización
  if (allPokemon === undefined) {
    return <h3>... buscando Pokemons</h3>;
  }

  return (
    <nav className="sidebar">
      <h5>Elige un pokemon</h5>

      {allPokemon.map((pokemon) => {
        return (
          <Link to={`/pokemon-details/${pokemon.name}`} key={pokemon.name}>
            {pokemon.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Sidebar;
