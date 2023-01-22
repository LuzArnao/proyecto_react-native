import { FlatList } from 'react-native'
import React, { useEffect } from 'react'
import BreadItem from '../components/BreadItem'
import { BREADS } from '../data/bread'

import { useSelector, useDispatch, connect } from 'react-redux'
import { filteredBread, selectBread } from "../store/actions/bread.action"

const CategoryBreadScreen = ({ navigation, route }) => {

  const dispatch = useDispatch()
  const category = useSelector((state) => state.categories.selected)
  const categoryBreads = useSelector((state) => state.breads.filteredBread)

  useEffect(() => {
    dispatch(filteredBread(category.id))
  }, [])

  const handleSelectedCategory = (item) => {
    dispatch(selectBread(item.id))
    navigation.navigate("Details", {
      productID: item.id,
      name: item.name,
    })
  };
  
  /* const breads = BREADS.filter(
    (bread) => bread.category === route.params.categoryID
    ); */

  const renderBreadItem = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelectedCategory}/>
    );
     
  return (
    <FlatList 
      data={categoryBreads} 
      keyExtractor={(item) => item.id}
      renderItem={renderBreadItem}
      numColumns={2}
  />


  )
}

export default connect()(CategoryBreadScreen);