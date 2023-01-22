import React, { useEffect } from 'react'
import { StyleSheet, FlatList, View, ImageBackground, Dimensions, Text, ScrollView } from 'react-native'
import { useSelector, connect, useDispatch } from 'react-redux'
import { getOrders } from '../store/actions/order.action'
import OrderItem from '../components/OrderItem'
import { backgroundPrincipal } from '../constants/img'
import MapView, {Marker} from 'react-native-maps';

export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const OrdersScreen = () => {
    const dispatch = useDispatch()
    const orders = useSelector((state) => state.orders.list);

    useEffect(() => {
        dispatch(getOrders());
    }, []);

    const handleDeleteItem = () => {
        console.log("Se borro")
    }

    const renderItem = ({ item }) => (
      <OrderItem item={item} onDelete={handleDeleteItem} />
    );


  return (
    <ImageBackground source={backgroundPrincipal} style={styles.background}>
      
        <View style={styles.mapcontainer}>
          <Text style={styles.title}> Encuentranos </Text>
          <MapView 
            style={{ flex: 1 }}
            initialRegion={{
              latitude: -34.604435,
              longitude: -58.392168,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
            coordinate={{latitude: -34.604435,
            longitude: -58.392168}}
            title={"Trunk Of Sex"}
            description={"Tienda Principal"}
         />
         </MapView>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}> Tus Ordenes </Text>
              <FlatList
                data={orders}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
              />
        </View> 
      
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    maxHeight: 270,
  },
  background: {
    position: 'absolute', 
    left: 0, 
    top: 0, 
    height: screenHeight, 
    width: screenWidth,
  },
  mapcontainer: {
    flex: 1,
    paddingRight: 18,
    paddingLeft: 18,
    height: '40%',
    maxHeight: 280,
    marginTop: 30,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 15,
  }
});

export default connect()(OrdersScreen);