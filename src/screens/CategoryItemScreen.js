import { FlatList, ImageBackground, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Item from '../components/Item'

import { backgroundPrincipal } from '../constants/img'

import { useSelector, useDispatch, connect } from 'react-redux'
import { filteredItem, selectItem } from "../store/actions/item.action"

export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const CategoryItemScreen = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const categoryItems = useSelector((state) => state.items.filteredItem)
  const category = useSelector((state) => state.categories.selected)

  useEffect(() => {
    dispatch(filteredItem(category.id))
  }, [])

  const handleSelectedCategory = (item) => {
    dispatch(selectItem(item.id))
    navigation.navigate("Details", {
      /*productID: item.id,*/
      name: item.name,
    })
  };
  
  const renderItem = ({ item }) => (
    <Item item={item} onSelected={handleSelectedCategory}/>
    );
     
  return (
    <ImageBackground source={backgroundPrincipal} style={styles.background}>
      <FlatList 
        data={categoryItems} 
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={1}
    />
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  background: {
    position: 'absolute', 
    left: 0, 
    top: 0, 
    height: screenHeight, 
    width: screenWidth,
}
})
export default connect()(CategoryItemScreen);