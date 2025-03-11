import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/libs/axios";
import useStore from "@/libs/store";

const Home = () => {
  const [username, setUsername] = useState("");
  const setGlobalUsername = useStore((state) => state.setUsername);
  const createUser = useMutation({
    mutationFn: (payload: any) => {
      console.log("mutation payload", payload);
      return axiosInstance
        .post("/chat/username/", {
          username: username,
        })
        .then((data) => {
          console.log("mutation response data", data.data);
          if (data.status === 200) {
            setGlobalUsername(username);
            router.push("/chooseRoom");
          }
          return data;
        });
    },
    onError: (err) => {
      console.log("mutation error", err);
    },
  });

  const onChangeText = (text: string) => {
    setUsername(text);
  };
  const handleCreateUser = () => {
    console.log("username create", username);
    if (!username) {
      return;
    }
    createUser.mutate({ username: username });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 100 }}>
        <Text style={{ textAlign: "center", fontSize: 24 }}>
          90 North Assignment
        </Text>
        <Text style={{ textAlign: "center", fontSize: 18 }}>Chat App</Text>
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          width: "90%",
          marginBottom: 50,
        }}
      >
        <Text style={{ color: "black", marginBottom: 16, textAlign: "center" }}>
          Please create a user to continue
        </Text>
        <Text style={{ fontSize: 16 }}>
          Username <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={(text) => onChangeText(text)}
          value={username}
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 4,
            marginTop: 8,
            color: "black",
          }}
        />
        <Pressable
          onPress={handleCreateUser}
          //   color="#841584"
          style={{
            backgroundColor: "#e8a548",
            padding: 10,
            marginTop: 16,
            alignItems: "center",
            borderRadius: 4,
          }}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={{ color: "white", fontWeight: 500, fontSize: 16 }}>
            {" "}
            {"Create User"}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "white",
  },
});
