import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import getColorByPokemonType from '../../utils/getColorByPokemonType';
import capitalize from 'lodash.capitalize';

export default function PokemonHeader( { nombre, numero, image, tipo } ) {

  const color = getColorByPokemonType(tipo);
  const bgStyle = [{ backgroundColor: color, ...styles.bg }];

  return (
    <>
    <View style={ bgStyle } />
      <SafeAreaView style={ styles.content }>
          <View style={ styles.headerName } > 
            <Text style={styles.name} > { capitalize(nombre) } </Text>
            <Text style={styles.order}> #{`${numero}`.padStart(3, 0)} </Text>
          </View>
          <View style={ styles.contentImg}>
             <Image source={ { uri: image } } style={ styles.image } />
          </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    bg: {
      width: "100%",
      height: 400,
      position: 'absolute',
      borderBottomEndRadius: 300,
      borderBottomLeftRadius: 300,
      transform: [ { scaleX: 2 } ],
    },
    content: {
      marginHorizontal: 20,
      marginTop: 30,
    },
    headerName: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 40,
    },
    name: {
      color : 'white',
      fontWeight: 'bold',
      fontSize: 27,
    },
    order: {
      color: 'white',
      fontWeight: 'bold',
    },
    contentImg: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      top: 30,
    },
    image: {
      width: 250,
      height: 300,
      resizeMode: 'contain',
    }
});