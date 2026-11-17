import * as Notifications from "expo-notifications";
import { Tabs } from "expo-router";
import { Text } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTitleStyle: {
          fontSize: 19,
          fontWeight: "bold",
          color: "#12304A",
        },
        headerShadowVisible: false,
        tabBarActiveTintColor: "#0EA5E9",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 68,
          paddingTop: 7,
          paddingBottom: 8,
          borderTopColor: "#EAF0F5",
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Reminder",
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 21, color }}>⏰</Text>
          ),
        }}
      />

      <Tabs.Screen
        name="tips"
        options={{
          title: "Tips",
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 21, color }}>💧</Text>
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 21, color }}>📖</Text>
          ),
        }}
      />

      <Tabs.Screen name="two" options={{ href: null }} />
    </Tabs>
  );
}
