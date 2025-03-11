import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

const chatRoomScreen = () => {
  const searchParams = useLocalSearchParams();
  const [messageList, setMessageList] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const roomId = searchParams?.roomId;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 16, color: "gray" }}>
        Room:{" "}
        <Text style={{ fontSize: 18, color: "black" }}>
          {searchParams?.roomName}
        </Text>
      </Text>
      <View style={{ flex: 1, gap: 8 }}>
        <View style={{ flex: 1, borderWidth: 1 }}>
          <Text>Message 1</Text>
          <Text>Message 2</Text>
          <Text>Message 3</Text>
          <Text>Message 4</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            // onChangeText={(text) => onChangeText(text)}
            // value={username}
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 4,

              color: "black",
              flex: 1,
            }}
          />
          <Pressable
            // onPress={handleCreateUser}
            //   color="#841584"
            style={{
              backgroundColor: "#e8a548",
              padding: 10,

              alignItems: "center",
              borderRadius: 4,
            }}
            accessibilityLabel="Learn more about this purple button"
          >
            <Text style={{ color: "white", fontWeight: 500, fontSize: 16 }}>
              {"Send"}
            </Text>
          </Pressable>
        </View>
      </View>
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
