import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, Text } from "react-native";
import OrderNavigator from "./OrderNavigator";

const BottomTabs = createBottomTabNavigator();

export default MyTabs = () => {
    return (
        
            <BottomTabs.Navigator 
            initialRouteName="ShopTab"
            screenOptions={{ 
                headerShown: false, 
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}>
                <BottomTabs.Screen
                 name="ShopTab"
                 style={styles.item}
                 component={ShopNavigator} 
                 options={{
                    tabBarIcon: ({ focus }) => (
                        <View style={styles.item}>
                            <Ionicons name='home' size={20} color='black'/>
                            <Text>Tienda</Text>
                        </View>
                    ),
                }}/>
                <BottomTabs.Screen
                 name="CartTab"
                 style={styles.item}
                 component={CartNavigator} 
                 options={{
                    tabBarIcon: ({ focus }) => (
                        <View style={styles.item}>
                            <Ionicons name='cart' size={20} color='black'/>
                            <Text>Carrito</Text>
                        </View>
                    ),
                }}/>
                <BottomTabs.Screen
                 name="OrdersTab"
                 style={styles.item}
                 component={OrderNavigator} 
                 options={{
                    tabBarIcon: ({ focus }) => (
                        <View style={styles.item}>
                            <Ionicons name='list' size={20} color='black'/>
                            <Text >Ordenes</Text>
                        </View>
                    ),
                }}/>
            </BottomTabs.Navigator>
        
    );
};

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 50,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})