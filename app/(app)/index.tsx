import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Home = () => {
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
          // onChangeText={(text) => onChangeText(text)}
          // value={value}
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
          onPress={() => {
            router.push("/chooseRoom");
          }}
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
