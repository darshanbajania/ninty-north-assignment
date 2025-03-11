import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import useStore from "@/libs/store";

const ChooseRoomScreen = () => {
  const username = useStore((state) => state.globalUsername);
  console.log("username in choose room", username);
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "flex-end", marginBottom: 8 }}>
        <Pressable
          onPress={() => {
            router.push("/chooseRoom/createRoom");
          }}
          //   color="#841584"
          style={{
            backgroundColor: "#e8a548",
            padding: 10,
            marginBottom: 16,
            alignItems: "center",
            borderRadius: 4,
          }}
        >
          <Text style={{ color: "white", fontWeight: 500, fontSize: 16 }}>
            {"+ Create New Room"}
          </Text>
        </Pressable>
      </View>
      <ScrollView>
        <Pressable
          onPress={() => {
            router.push("/chatRoomScreen");
          }}
          style={{
            backgroundColor: "#fcf6ed",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 8,
          }}
        >
          <Text style={{ fontSize: 16 }}>{"Room 1"}</Text>
        </Pressable>
      </ScrollView>
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
