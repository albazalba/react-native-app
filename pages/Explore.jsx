import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Explore = () => {
  const productData = [
    {
      id: "1",
      name: "Wooden utensils",
      image: require("../assets/images/wallpaper.jpg"),
      price: "$100",
    },
    { id: "2", name: "Glass Pots", image: require("../assets/images/pots.jpg") , price: "$200",},
    { id: "3", name: "Bedlamps", image: require("../assets/images/bedlamp.jpg")  ,price: "$300",},
    // Add more products as needed
  ];

  const ProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.priceSection}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.exploreHeader}>
        <Icon name="menu" size={32} />
        <Icon name="search" size={32} />
      </View>
      <Text style={styles.title}>Top Products</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <FlatList
          data={productData}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => <ProductItem item={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  exploreHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: "semiBold",
  },
  productItem: {
    margin: 10,
    alignItems: "center",
  },
  productImage: {
    width: 200,
    height: 300,
    resizeMode: "cover",
    borderRadius: 8,
  },
  productName: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: 'medium'
  },
  priceSection: {
    position: "absolute",
    bottom: 8,
    left: 8,
  },
  productPrice: {
    padding: 5,
    borderRadius: 5,
    fontWeight: "bold",
  },
});

export default Explore;
