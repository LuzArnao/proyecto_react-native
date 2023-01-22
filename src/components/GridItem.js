import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors';

const GridItem = ({item, onSelected}) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity 
      style={{...styles.container, backgroundColor: item.color}} 
      onPress={() => onSelected(item)}
      >
        <View style={styles.categories}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  )
}

export default GridItem;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 6,
        margin: 15,
        height: 150,
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    },
    title: {
        fontFamily: 'Tillana',
        fontSize: 16,
        color: '#FFFFFF',
    },
})