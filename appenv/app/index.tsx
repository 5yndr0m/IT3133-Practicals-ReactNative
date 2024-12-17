import { Image, Text, View } from "react-native";

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
      <Text>Hello World!</Text>
      <Text>Welcome to my app!</Text>
    </View>
  );
}
