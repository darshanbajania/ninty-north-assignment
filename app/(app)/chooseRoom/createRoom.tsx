import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/libs/axios";
import { router } from "expo-router";

const CreateRoomScreen = () => {
  const [roomName, setRoomName] = useState("");
  const createUser = useMutation({
    mutationFn: (payload: any) => {
      return axiosInstance
        .post("/chat/rooms/", {
          name: payload.roomName,
        })
        .then((data) => {
          console.log("mutation response data", data.data);
          if (data.status === 200) {
            // setGlobalUsername(username);
            // router.push("/chooseRoom");
            router.back();
          }
          return data;
        });
    },

    onError: (err) => {
      console.log("mutation error", err?.response?.data);
    },
  });
  const onChangeText = (text: string) => {
    setRoomName(text);
  };
  const handleCreateNewRoom = () => {
    console.log("username create", roomName);
    if (!roomName) {
      return;
    }
    createUser.mutate({ roomName: roomName });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 16 }}>
          Room Name<Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          onChangeText={(text) => onChangeText(text)}
          value={roomName}
          placeholder="Enter the room name"
          style={{
            paddingLeft: 8,
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 4,
            marginTop: 8,
            color: "black",
          }}
        />
      </View>
      <View style={{ alignItems: "flex-end", marginBottom: 8 }}>
        <Pressable
          onPress={handleCreateNewRoom}
          //   color="#841584"
          style={{
            backgroundColor: "#e8a548",
            padding: 10,
            marginTop: 16,
            alignItems: "center",
            borderRadius: 4,
          }}
        >
          <Text style={{ color: "white", fontWeight: 500, fontSize: 16 }}>
            {"Create Room"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
});
