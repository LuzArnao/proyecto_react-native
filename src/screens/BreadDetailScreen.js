import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux'

const BreadDetailScreen = ({navigation}) => {

  const bread = useSelector((state) => state.bread.selected)
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BreadDetailScreen</Text>
      <Button title="Go to Categories" onPress={() => navigation.navigate("Categories")}/>
    </View>
  )
}

export default BreadDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFBF10",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontFamily: 'Tillana'
    }
})