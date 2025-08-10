import { StyleSheet, useColorScheme } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";

// Themed Components
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ThemedText style={[styles.title, { color: theme.text }]}>
        About Page
      </ThemedText>
      <Link style={styles.link} href="/">
        <ThemedText>Go to Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
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
