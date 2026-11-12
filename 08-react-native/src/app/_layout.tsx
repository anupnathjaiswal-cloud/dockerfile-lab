import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#f5f3ed" },
                headerShadowVisible: false,
                headerTintColor: "#1d332c",
                headerTitleStyle: { fontWeight: "700" },
            }}
        >
            <Stack.Screen
                name="index"
                options={{ title: "Dockerfile Lab" }}
            />
            <Stack.Screen name="about" options={{ title: "About the lab" }} />
            <Stack.Screen name="profile" options={{ title: "Your profile" }} />
            <Stack.Screen name="services" options={{ title: "Explore the lab" }} />
            <Stack.Screen name="contact" options={{ title: "Contact" }} />
        </Stack>
    );
}
