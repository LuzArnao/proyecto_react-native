import React, { useEffect } from 'react'
import { 
  FlatList, 
  ImageBackground, 
  StyleSheet, Text, 
  TouchableOpacity, 
  View, 
  Dimensions 
} from 'react-native'
import CartItem from '../components/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { confirmCart, removeItem } from '../store/actions/cart.action'
import { backgroundPrincipal } from '../constants/img';
import { COLORS } from '../constants/colors';

export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const CartScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const handleConfirmCart = () => {
    dispatch(confirmCart(items, total))
  };

  const handleDeleteItem = (id) => {
    dispatch(removeItem(id));
  };

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <ImageBackground source={backgroundPrincipal} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList 
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
            <Text style={styles.text}>Confirmar</Text>
            <View style={styles.total}>
              <Text style={styles.text}>Total</Text>
              <Text style={styles.text}>{total}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    paddingBottom: 55,
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: COLORS.tercearyOP,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 25,
  },
  total: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    padding: 8,
  },
  background: {
    position: 'absolute', 
    left: 0, 
    top: 0, 
    height: screenHeight, 
    width: screenWidth,
  },
});