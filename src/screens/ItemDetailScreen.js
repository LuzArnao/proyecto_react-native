import { Button, StyleSheet, Text, View, Dimensions, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../store/actions/cart.action'
import { backgroundPrincipal } from '../constants/img'
import { COLORS } from '../constants/colors'

export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const ItemDetailsScreen = () => {
  const item = useSelector((state) => state.items.selected)
  
  useEffect(() => {
    console.log(item);
  }, []);

  const dispatch = useDispatch();

  const handleAddItemCart = () => dispatch(addItem(item));

  const [product, setProduct] = useState(item)
  const [selectedImage, setSelectedImage] = useState()

  const __renderImages = () => {
    return (
      <View style={styles.smallImagesContainer}>
        {product.images.map((prop, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => {
                setSelectedImage(prop)
              }}>
              <Image style={styles.smallImage} source={{ uri: prop }} />
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  const mainImage = selectedImage ? selectedImage : item.images[0]
  
  return (
    <ImageBackground style={styles.background} source={backgroundPrincipal}>
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.name}>{item.name} - <Text style={styles.price}>${item.price}</Text></Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.header}>
                <View style={styles.mainImageContainer}>
                  <Image style={styles.mainImage} source={{ uri: mainImage }} />
                </View>
                {__renderImages()}
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Description</Text>
            
            
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>

              <TouchableOpacity style={styles.shareButton}>
                <Text style={styles.shareButtonText} onPress={handleAddItemCart}>Agregar al Carrito</Text>
              </TouchableOpacity>
            
        </ScrollView>
      </View>
    </ImageBackground>
  )
}

export default ItemDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  content: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
  },
  mainImageContainer: {
    borderRadius: 30,
  },
  mainImage: {
    width: 230,
    height: 200,
  },
  smallImagesContainer: {
    flexDirection: 'column',
    marginLeft: 30,
  },
  smallImage: {
    width: 60,
    height: 60,
    marginTop: 5,
  },
  btnColor: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginHorizontal: 3,
  },
  contentColors: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: 'bold',
  },
  price: {
    margin: 5,
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  description: {
    fontSize: 18,
    color: '#FFFFF',
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: COLORS.terceary,
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 5,
    backgroundColor: COLORS.whiteOP,
    marginHorizontal: 5,
  },
  cardContent: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  background: {
    position: 'absolute', 
    left: 0, 
    top: 0, 
    height: screenHeight, 
    width: screenWidth,
  },
});