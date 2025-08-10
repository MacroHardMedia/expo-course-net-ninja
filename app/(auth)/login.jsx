import {
  StyleSheet,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";
import { useUser } from "../../contexts/UserContext";

//themed components
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, user } = useUser();

  const handleSubmit = async () => {
    try {
      const result = await login(email, password);
      if (result.success) {
        console.log("Login successful! Current user is: ", user);
      } else {
        console.log("Login failed: ", result.error);
      }
    } catch (error) {
      console.log("Login error: ", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Login To Your Account
        </ThemedText>

        <ThemedTextInput
          placeholder="Email"
          style={{ width: "90%", marginBottom: 20 }}
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
        <ThemedTextInput
          placeholder="Password"
          style={{ width: "90%", marginBottom: 20 }}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2" }}>Log In</Text>
        </ThemedButton>

        <Spacer height={100} />
        <Link href="/register" style={{ textAlign: "center" }}>
          <ThemedText>Register Instead</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8,
  },
});
