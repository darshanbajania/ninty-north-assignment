import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/libs/axios";

const chatRoomScreen = () => {
  const searchParams = useLocalSearchParams();
  const [messageList, setMessageList] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const roomId = searchParams?.roomId;
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["chat-room-screen", roomId],
    queryFn: async () => {
      console.log("response data");
      const response = await axiosInstance.get(`chat/rooms/${roomId}/messages`);
      console.log("response data", response.data);
      return response?.data;
    },
  });

  const previousChats = data
    ? data.length > 8
      ? data.slice(0, 8)?.reverse()
      : data?.reverse()
    : [];
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 16, color: "gray" }}>
        Room:{" "}
        <Text style={{ fontSize: 18, color: "black" }}>
          {searchParams?.roomName}
        </Text>
      </Text>
      <View style={{ flex: 1, gap: 8 }}>
        <View style={{ flex: 1, gap: 8, marginTop: 16 }}>
          {previousChats.map((message) => {
            return (
              <View
                style={{
                  backgroundColor: "#fcf6ed",
                  borderRadius: 8,
                  padding: 8,
                  width: "75%",
                }}
                key={message.id}
              >
                <Text style={{ fontSize: 16 }}>{message.content}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 12, color: "gray" }}>
                    {message.username}
                  </Text>
                  <Text
                    style={{ fontSize: 12, color: "gray", textAlign: "right" }}
                  >
                    {message.created_at}
                  </Text>
                </View>
              </View>
            );
          })}
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
