import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoritesNavigation from './FavoritesNavigation';
import AccountNavigation from './AccountNavigation';
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>

            <Tab.Screen name='favorites' component={ FavoritesNavigation } options={{
                tabBarLabel: "Favoritos",
                tabBarIcon: ({ color, size }) => (
                    <Icon name='heart' color={color} size={size} />
                ),
            }}
            />

            <Tab.Screen name='pokedex' component={ PokedexNavigation } options={{
                tabBarLabel: "",
                tabBarIcon: () => renderPokeball(),
            }}
            />

            <Tab.Screen name='account' component={ AccountNavigation } options={{
                tabBarLabel: "Cuenta",
                tabBarIcon: ({ color, size }) => (
                    <Icon name='user' color={color} size={size} />
                ),
            }}
            />

        </Tab.Navigator>
    )
}

//Renderizando la pokebola del menu tab
const renderPokeball = () => {
    return (
        <Image
            source={ require('../assets/pokeball.png') }
            style={ { width: 45, height: 45,  } }
        />
    )
}
