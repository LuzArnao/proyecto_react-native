import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'



const Item = ({ item, onSelected }) => {
    const imagen = item.images[0]
  return (
    <TouchableOpacity
    onPress={() => onSelected(item)}>
         <View style={styles.item}>
            <View>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>$ {item.price},00</Text>
                    <Text style={styles.details}>{item.short}</Text>
                </View>
            </View>
            <View>
                <Image style={styles.smallImage} source={{ uri: imagen }}/>
            </View>
         </View>
    </TouchableOpacity>
  )
}

export default Item;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: 'rgba(204, 204, 204, 0.7)',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Tillana',
    },
    details: {
        fontSize: 18
    },
    smallImage: {
        width: 70,
        height: 70,
        marginTop: 5,
    },
})