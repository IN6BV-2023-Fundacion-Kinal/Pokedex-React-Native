import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";

const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="account" 
            component={ AccountScreen }
            options={ { title: 'Mi Cuenta' } }      
        />
    </Stack.Navigator>
  )
}