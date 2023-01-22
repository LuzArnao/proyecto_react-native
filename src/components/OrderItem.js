import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const formatDay = (time) => {
    const date = new Date(time)
    return date.toLocaleDateString();
};

const sumTotal = (list) => {
    return list.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0);
};

const OrderItem = ({item, onDelete}) => {
  return (
    <View>
      <View style={styles.item}>
        <Text>Ingreso: {formatDay(item.date)}</Text>
        <Text>$ {sumTotal(item.items)}</Text>
      </View>
    </View>
  )
}

export default OrderItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 5,
    margin: 2,
  }
})