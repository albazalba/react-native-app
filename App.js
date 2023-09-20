import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import LoginScreen from "./pages/login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./FirebaseConfig";
import { AuthProvider, useAuth } from "./AuthContext";

const Stack = createNativeStackNavigator();
const insideStack = createNativeStackNavigator();

export default function App() {
  const [IsReady, SetIsReady] = useState(false);
  const [user, setUser] = useState(null);

  const LoadFonts = async () => {
    await Font.loadAsync({
      regular: require("./assets/fonts/Poppins-Regular.ttf"),
      light: require("./assets/fonts/Poppins-Light.ttf"),
      bold: require("./assets/fonts/Poppins-Bold.ttf"),
      semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
      medium: require("./assets/fonts/Poppins-Medium.ttf"),
      extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    });
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user);
    });
  }, []);

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  const InsideLayout = () => {
    return (
      <insideStack.Navigator initialRouteName="App">
        <Stack.Screen
          name="App"
          component={Home}
          options={{ headerShown: false }}
        />
      </insideStack.Navigator>
    );
  };

  return (
    <AuthProvider>
      <SafeAreaProvider style={{ fontFamily: "medium" }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            {user ? (
              <Stack.Screen
                name="Inside"
                component={InsideLayout}
                options={{ headerShown: false }}
              />
            ) : (
              <>
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Signup"
                  component={Signup}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "medium",
    width: "100%",
  },
  textStyle: {
    fontFamily: "medium",
    fontSize: 18,
  },
});
