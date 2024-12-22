import { Image, Text, View, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/images/react-logo.png")}
          style={styles.logo}
          resizeMode="contain"
          accessibilityLabel="React Logo"
        />
        <Text style={styles.titleText}>Hello World!</Text>
        <Text style={styles.paraText}>Welcome to my app!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  titleText: {
    fontSize: Platform.select({ ios: 32, android: 28 }),
    textAlign: "center",
    color: '#00CED1', // Using hex color instead of named color
    fontWeight: Platform.select({ ios: '800', android: 'bold' }),
    marginBottom: 10,
  },
  paraText: {
    fontSize: 16,
    textAlign: "center",
    color: '#000000',
    fontWeight: '500',
    lineHeight: 24,
  },
});
