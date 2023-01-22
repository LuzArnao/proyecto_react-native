import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from '../constants/colors'
import AuthScreen from "../screens/AuthScreen";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
    return (

            <Stack.Navigator 
                initialRouteName="Login" 
                screenOptions={{
                    headerStyle: { backgroundColor: COLORS.terceary},
                    headerTintColor: COLORS.secondary,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
            }} >
                <Stack.Screen 
                    name="Login" 
                    component={AuthScreen}
                    options={{
                        title: 'TrunkOfSex - Bienvenido', 
                        headerTitleAlign: 'center'
                    }}
                />
            </Stack.Navigator>

    )
}