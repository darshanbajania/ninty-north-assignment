import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const chatRoomScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>chatRoomScreen</Text>
    </SafeAreaView>
  );
};

export default chatRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
});
