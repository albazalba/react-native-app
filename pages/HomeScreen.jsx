import { View, Text, ScrollView, SafeAreaView, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'

const HomeScreen = () => {
  const categories = [
    { id: '1', title: 'Wallpaper', image: require('../assets/images/wallpaper.jpg') },
    { id: '2', title: 'Pots', image: require('../assets/images/pots.jpg') },
    { id: '3', title: 'Lamps', image: require('../assets/images/bedlamp.jpg') },
    { id: '4', title: 'Frames', image: require('../assets/images/wallframe.jpg') },
    { id: '5', title: 'Plant Pots', image: require('../assets/images/plantpot.jpg') },
    { id: '6', title: 'Chairs', image: require('../assets/images/chair.jpg') },


    // Add more categories as needed
  ];

  const renderCategoryItem = ({ item }) => {
    return (
      <View style={styles.categoryItem}>
        <Image source={item.image} style={styles.categoryImage} />
        <Text style={styles.categoryTitle}>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Products</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display three items per row
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  header: {
    marginTop: 20,
    width: "100%",
    textAlign:"center",
    fontFamily: 'semiBold',
    fontSize: 24,
    color: COLORS.secondary
  },
  categoryItem: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    marginTop: 40,
  },
  categoryImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  categoryTitle: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: 'regular',
    textAlign: 'center',
  },
})

export default HomeScreen
