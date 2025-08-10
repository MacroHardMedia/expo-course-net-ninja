import { StyleSheet, Text, useColorScheme } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";

// Themed Components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />

      <ThemedText style={styles.title} title={true}>
        Home
      </ThemedText>

      <Spacer height={10} />
      <ThemedText>Goon Timer Mobile App</ThemedText>
      <Spacer />

      <Link style={styles.link} href="/login">
        <ThemedText>Login Page</ThemedText>
      </Link>

      <Link style={styles.link} href="/register">
        <ThemedText>Register Here</ThemedText>
      </Link>

      <Link style={styles.link} href="/profile">
        <ThemedText>Profile Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 2,
  },
});
