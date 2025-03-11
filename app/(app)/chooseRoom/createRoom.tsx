import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CreateRoomScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 16 }}>
          Room Name<Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          // onChangeText={(text) => onChangeText(text)}
          // value={value}
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
          onPress={() => {
            // router.push("/chooseRoom/createRoom");
          }}
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
