import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryItemScreen from "../screens/CategoryItemScreen";
import ItemDetailScreen from "../screens/ItemDetailScreen";
import { COLORS } from '../constants/colors'

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Categories" 
            screenOptions={{
                headerStyle: { backgroundColor: COLORS.primary },
                headerTintColor: COLORS.secondary,
                headerTitleStyle: {
                    fontWeight: 'bold',
            },
        }} 
        >
            <Stack.Screen 
                name="Categories" 
                component={CategoriesScreen}
                options={{
                    title: 'TrunkOfSex - Categorias', 
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen 
                name="Item" 
                component={CategoryItemScreen}
                options={({ route }) => ({
                    title: 'Categoria - ' + route.params.name,
                    headerTitleAlign: 'center'
                })}
            />
            <Stack.Screen 
                name="Details" 
                component={ItemDetailScreen} 
                options={({ route }) => ({
                    title: route.params.name,
                    headerTitleAlign: 'center'
                })}
            />
        </Stack.Navigator>
    );
};