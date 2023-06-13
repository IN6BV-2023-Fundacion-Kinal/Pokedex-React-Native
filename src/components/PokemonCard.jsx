import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function PokemonCard({ pokemonItem }) {

    const goToPokemon = () => {
        console.log(`Vamos a: ${pokemonItem.name}`);
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon} >
            <View style={styles.card} >
                <View style={ styles.spacing }>
                    <View style={ styles.bgStyles } >
                        <Text style={ styles.number } > { pokemonItem.order } </Text>
                        <Text style={ styles.name } > {pokemonItem.name} </Text>
                        <Image style={ styles.image } 
                               source={ { uri: pokemonItem.image } } 
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        backgroundColor: 'grey',
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 11,
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10,
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
    }
});