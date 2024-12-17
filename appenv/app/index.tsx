import { Image, Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require("../assets/images/react-logo.png")} style={{ width: 200, height: 200 }} />
      <Text style={styles.titleText} >Hello World!</Text>
      <Text style={styles.paraText}>Welcome to my app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 32,
    textAlign: "center",
    color: 'aqua',
    fontWeight: '800',
  },
  paraText: {
    fontSize: 16,
    textAlign: "center",
    color: '#000',
    fontWeight: '500',
  },
});