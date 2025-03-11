import { Text } from "react-native";
import { Stack } from "expo-router";

export default function AppLayout() {
  //   const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.

  //   This layout can be deferred because it's not the root layout.
  //   return <Redirect href="/" />;
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="chooseRoom"
        options={{ headerShown: false, headerTitle: "Choose Room" }}
      />
      <Stack.Screen name="chatRoomScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
