// Assuming you have already set up a React Native project with the necessary dependencies, including React Navigation.

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { firebaseAuth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button, Input } from "@rneui/base";
import { Link } from "@react-navigation/native";

export default function Signup({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = firebaseAuth;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        username,
        password
      );
      console.log(response);
      alert("Check your emails!");
    } catch (error) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.blueRectangle}></View>
      <Text style={styles.heading1}>Welcome!</Text>
      <Text style={styles.heading2}>Join Us</Text>
      <View style={{ marginBottom: 20 }}>
        <Input
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <Input
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Input
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
      </View>
      <Button
        title="SIGN UP"
        loading={loading}
        loadingProps={{
          size: "small",
          color: "#102C57",
        }}
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={styles.button}
        containerStyle={{
          width: "100%",
        }}
        disabled={loading}
        onPress={signUp}
      />
      <View style={styles.signupText}>
        <Text style={{ fontFamily: "regular" }}>
          Already have an account?
          <Link to={{ screen: "Login" }} style={{ color: "#102C57" }}>
            {" "}
            Login
          </Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "medium",
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F8F0E5",
  },
  blueRectangle: {
    width: 300,
    height: 300,
    backgroundColor: "#DAC0A3",
    position: "absolute",
    top: -110,
    right: -80,
    borderRadius: 200,
    transform: [{ scaleX: 1 }],
  },
  heading1: {
    fontFamily: "medium",
    fontSize: 18,
  },
  heading2: {
    fontFamily: "medium",
    fontSize: 22,
    marginBottom: 30,
  },
  input: {
    width: "100%",
    borderColor: "gray",
    fontFamily: "regular",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#DAC0A3",
    padding: 14,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "medium",
  },
  signupText: {
    flex: 0,
    alignItems: "center",
    marginTop: 40,
  },
});
