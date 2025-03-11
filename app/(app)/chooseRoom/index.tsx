import {
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { router, useFocusEffect } from "expo-router";
import { focusManager, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/libs/axios";

const ChooseRoomScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["choose-room-screen"],
    queryFn: async () => {
      console.log("response data");
      const response = await axiosInstance.get(`chat/rooms`);
      // console.log("response data", response.data);
      return response?.data;
    },
  });
  useFocusEffect(
    React.useCallback(() => {
      focusManager.setFocused(true);
      return () => {
        focusManager.setFocused(undefined);
      };
    }, [])
  );
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetch().finally(() => {
      setRefreshing(false);
    });
  }, []);
  if (isError) {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 16,
          backgroundColor: "white",
        }}
      >
        <Text style={{ color: "red", fontSize: 16, textAlign: "center" }}>
          Something Went Wrong!{" "}
        </Text>
        <Text style={{ textAlign: "center" }}>{error.message} </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "flex-end",
          marginBottom: 8,
          paddingHorizontal: 16,
        }}
      >
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
      {!isLoading ? (
        <FlatList
          data={data ? data : []}
          contentContainerStyle={{
            gap: 8,
            paddingHorizontal: 16,
            paddingBottom: 50,
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                router.push({
                  pathname: "/chatRoomScreen",
                  params: {
                    roomId: item.id,
                    roomName: item.name,
                  },
                });
              }}
              style={{
                backgroundColor: "#fcf6ed",
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 16 }}>{item?.name}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <View style={{ paddingTop: 32 }}>
              <Text
                style={{ textAlign: "center", fontSize: 16, color: "gray" }}
              >
                No rooms available!
              </Text>
              <Text style={{ textAlign: "center", fontSize: 16, marginTop: 8 }}>
                Please create a new room
              </Text>
            </View>
          }
        />
      ) : (
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          Fetching Rooms...
        </Text>
      )}
    </View>
  );
};

export default ChooseRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: "white",
  },
});
