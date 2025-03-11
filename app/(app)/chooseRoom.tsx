import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ChooseRoomScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Choose Room</Text>
    </View>
  );
};

export default ChooseRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
});
