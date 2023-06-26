import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonDetailsApi } from '../api/pokemon';

export default function PokemonScreen({ navigation, route: { params } }) {

  //Acá se guardan los detalles del pokemon seleccionado al consultar la API
  const [pokemon, setPokemon] = useState(null);
  const { id } = params;
  //console.log(id);

  //Se ejecuta cada vez que lleva un parametro diferente (params cambia su valor)
  useEffect(() => {
    (async () => {
      try {
        const respuesta = await getPokemonDetailsApi(id);
        //console.log(respuesta);
        setPokemon(respuesta);
      } catch (error) {
        navigation.goBack();
      }
    })()
  }, [params]);

  //Rendirizar null cuando no se tenga una respuesta:
  if( !pokemon ) return null;

  return (
    <View>
      <Text>Hola acá veremos a  un pokemon en especifico y sus detalles </Text>
      <Text> { pokemon.name } </Text>
    </View>
  )
}