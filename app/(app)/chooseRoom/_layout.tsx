import { Text } from "react-native";
import { Stack } from "expo-router";

export default function Layout() {
  //   const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.

  //   This layout can be deferred because it's not the root layout.
  //   return <Redirect href="/" />;
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="index"
        options={{ headerShown: true, headerTitle: "Choose Room" }}
      />
      <Stack.Screen name="createRoom" options={{ headerShown: true }} />
    </Stack>
  );
}
