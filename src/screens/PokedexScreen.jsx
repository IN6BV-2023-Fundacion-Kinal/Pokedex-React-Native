import { SafeAreaView, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function PokedexScreen() {

  const [pokemons, setPokemons] = useState([]);

  //nos sirve para mandar a llamar a otra petición al momento de hacer un reload
  const [nextUrl, setNextUrl] = useState(null);

  //console.log(pokemons);

  useEffect(  () => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi( nextUrl );
      //console.log(response);
      //console.log(response.next);
      setNextUrl( response.next );

      const pokemonsArray = [];

      for await (const poke of response.results ) {
        //console.log(poke);
        const pokemonDetail = await getPokemonDetailsByUrlApi(poke.url);
        //console.log( pokemonDetail );

        pokemonsArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other['official-artwork'].front_default,
        });

      }

      // setPokemons(pokemonsArray);
      setPokemons( [ ...pokemons, ...pokemonsArray ] );
      //Setear un array en conjunto

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView>
      <PokemonList listPokemon={ pokemons } loadPokemons={ loadPokemons } isNext={ nextUrl } />
    </SafeAreaView>
  )
}