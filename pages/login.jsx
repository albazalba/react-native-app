// Assuming you have already set up a React Native project with the necessary dependencies, including React Navigation.

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { firebaseAuth } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Input } from "@rneui/base";
import { Link } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPws, setShowPwd] = useState(false)

  const auth = firebaseAuth;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Sign in failed:" + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.blueRectangle}></View>
      <Text style={styles.heading1}>Welcome!</Text>
      <Text style={styles.heading2}>Login</Text>
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
          secureTextEntry={showPws ? false : true}
          onChangeText={(text) => setPassword(text)}
          value={password}
          rightIcon={<Icon onPress={() => setShowPwd(!showPws)} name={showPws ?"eye-slash" :"eye"} size={20}/>}
        />
      </View>
        <Button
          title="SIGN IN"
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
          onPress={signIn}
        />
      <View style={styles.signupText}>
        <Text style={{ fontFamily: "regular" }}>
          Don't have an account?
          <Link to={{ screen: "Signup" }} style={{ color: "#102C57" }}>
            {" "}
            Sign up
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
    left: -80,
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
