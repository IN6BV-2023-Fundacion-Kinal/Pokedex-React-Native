import { createStackNavigator } from "@react-navigation/stack";
import PokedexScreen from "../screens/PokedexScreen";
import PokemonScreen from "../screens/PokemonScreen";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="pokedex" component={ PokedexScreen } 
                          options={ { title: "", headerTransparent: true } } 
            />
            <Stack.Screen name="pokemon" component={ PokemonScreen } />
        </Stack.Navigator>
    )
}