import React from 'react'
import { FlatList, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import GridItem from '../components/GridItem'

import { useSelector, useDispatch, connect } from 'react-redux';
import { selectedCategory } from '../store/actions/category.action';

import { backgroundPrincipal } from '../constants/img';

export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id))
    navigation.navigate('Item', {
      name: item.title,
    })
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory}/>
    );

  return (
    <ImageBackground source={backgroundPrincipal} style={styles.background}>
      <FlatList 
        data={categories} 
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  background: {
      position: 'absolute', 
      left: 0, 
      top: 0, 
      height: screenHeight, 
      width: screenWidth,
  }
})

export default connect()(CategoriesScreen);