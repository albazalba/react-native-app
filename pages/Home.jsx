import { StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Explore from "./Explore";
import Profile from "./Profile";
import Icon from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: COLORS.background }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Explore") {
            iconName = focused ? "th-list" : "list";
          } else if (route.name === "Profile") {
            iconName = focused ? "user-alt" : "user";
          }
          return <Icon name={iconName} size={18} color={color} />;
        },
        tabBarStyle: {
          padding: 15,
          backgroundColor: COLORS.primary,
          borderRadius: 20,
        },
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: "black",
      })}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    height: "100%",
  },
});
