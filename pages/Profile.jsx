import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useAuth } from "../AuthContext";
import Icon from "react-native-vector-icons/FontAwesome5";

const Profile = () => {
  const { user, logout } = useAuth();
  console.log("🚀 ~ file: Profile.jsx:14 ~ Profile ~ user:", user);
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    profileImage: require("../assets/images/profile.jpeg"), // Replace with the path to the user's profile image
  };

  // Sample order data (replace with actual order data)
  const orders = [
    {
      id: "1",
      orderNumber: "123456789",
      date: "2023-09-15",
      totalAmount: "$99.99",
      status: "Delivered",
    },
    // Add more orders as needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={userData.profileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>{userData.name}</Text>
        <Text style={styles.profileEmail}>{user?.email}</Text>
      </View>
      <View style={styles.menuItem}>
        <Icon name="user-alt" size={18}/>
        <View>
          <Text style={styles.menuText}>Account</Text>
          <Text style={styles.menuSubText}>View you account details.</Text>
        </View>
      </View>
      <View style={{...styles.menuItem, borderBottomWidth: 1}}>
        <Icon name="hands-helping" size={18}/>
        <View>
          <Text style={styles.menuText}>Help Center</Text>
          <Text style={styles.menuSubText}>Help regarding recent purchase.</Text>
        </View>
      </View>
      <View style={styles.orderHistory}>
        <Text style={styles.sectionTitle}>Order History</Text>
        {orders.map((order) => (
          <View key={order.id} style={styles.orderItem}>
            <Text style={styles.orderNumber}>Order #{order.orderNumber}</Text>
            <Text style={styles.orderDate}>{order.date}</Text>
            <Text style={styles.orderAmount}>Total: {order.totalAmount}</Text>
            <Text style={styles.orderStatus}>Status: {order.status}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: "gray",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
  },
  menuItem: {
    // flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: "#ccc",
    padding: 15,
    alignItems:'center'
  },
  menuText:{
    fontFamily: 'semiBold',
    marginLeft: 15,
    fontSize: 16
  },
  menuSubText:{
    fontFamily: 'light',
    marginLeft: 15,
    fontSize: 12
  },
  orderHistory: {
    marginTop: 20
  },
  orderItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 12,
  },
  orderNumber: {
    fontSize: 16,
    fontFamily: "semiBold",
  },
  orderDate: {
    fontFamily: 'light',
    fontSize: 14,
    color: "gray",
  },
  orderAmount: {
    fontFamily: 'medium',
    fontSize: 16,
    marginTop: 4,
  },
  orderStatus: {
    fontFamily: 'medium',
    fontSize: 16,
    marginTop: 4,
    color: "green", // You can use different colors for different order statuses
  },
});

export default Profile;
