import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";
import {
  Alert,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function ReminderTab() {
  const [isReminding, setIsReminding] = useState(false);
  const [message, setMessage] = useState("Time to drink a glass of water!");
  const [intervalMinutes, setIntervalMinutes] = useState("1");

  useEffect(() => {
    async function requestPermissions() {
      try {
        const { status } = await Notifications.requestPermissionsAsync();

        if (status !== "granted") {
          Alert.alert(
            "Permission Required",
            "Please enable notifications to receive reminders.",
          );
        }
      } catch (error) {
        console.error("Permission error:", error);
      }
    }

    requestPermissions();
  }, []);

  async function scheduleReminder() {
    Keyboard.dismiss();

    const interval = Number(intervalMinutes);

    if (!Number.isInteger(interval) || interval < 1) {
      Alert.alert("Invalid Interval", "Enter at least 1 minute.");
      return;
    }

    if (!message.trim()) {
      Alert.alert("Message Required", "Enter a reminder message.");
      return;
    }

    try {
      const { status } = await Notifications.requestPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Enable notification permission in your device settings.",
        );
        return;
      }

      await Notifications.cancelAllScheduledNotificationsAsync();

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "💧 Hydration Alert",
          body: message.trim(),
          sound: "default",
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: interval * 60,
          repeats: true,
        },
      });

      setIsReminding(true);

      Alert.alert(
        "Reminders Activated!",
        `Your hydration reminder is scheduled every ${interval} minute(s).`,
      );
    } catch (error) {
      console.error("Scheduling error:", error);
      Alert.alert("Error", "Unable to schedule reminders.");
    }
  }

  async function stopReminder() {
    try {
      await Notifications.cancelAllScheduledNotificationsAsync();
      setIsReminding(false);

      Alert.alert(
        "Reminders Stopped",
        "All scheduled reminders have been cancelled.",
      );
    } catch (error) {
      console.error("Cancellation error:", error);
      Alert.alert("Error", "Unable to stop reminders.");
    }
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {/* Welcome section */}
      <View style={styles.welcome}>
        <View>
          <Text style={styles.greeting}>YOUR DAILY WELLNESS</Text>
          <Text style={styles.welcomeTitle}>Stay Hydrated.</Text>
          <Text style={styles.welcomeSubtitle}>
            A healthier you starts with water.
          </Text>
        </View>

        <View style={styles.waterIcon}>
          <Text style={styles.waterEmoji}>💧</Text>
        </View>
      </View>

      {/* Main reminder card */}
      <View style={styles.mainCard}>
        <View style={styles.cardHeading}>
          <View>
            <Text style={styles.cardEyebrow}>HYDRATION REMINDER</Text>
            <Text style={styles.cardTitle}>Drink Water</Text>
          </View>

          <View style={styles.glassIcon}>
            <Text style={styles.glassEmoji}>🥛</Text>
          </View>
        </View>

        <Text style={styles.description}>
          Set your reminder and let us help you maintain a healthy hydration
          routine throughout the day.
        </Text>

        <View style={styles.divider} />

        {/* Custom message */}
        <Text style={styles.inputLabel}>CUSTOM MESSAGE</Text>

        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Enter your reminder message"
          placeholderTextColor="#94A3B8"
          multiline
        />

        {/* Interval */}
        <Text style={styles.inputLabel}>REMINDER INTERVAL</Text>

        <View style={styles.intervalContainer}>
          <TextInput
            style={styles.intervalInput}
            value={intervalMinutes}
            onChangeText={setIntervalMinutes}
            keyboardType="numeric"
            placeholder="1"
            placeholderTextColor="#94A3B8"
          />

          <Text style={styles.intervalUnit}>MINUTES</Text>
        </View>

        {/* Status */}
        <View style={styles.statusCard}>
          <View style={styles.statusLeft}>
            <View
              style={[
                styles.statusDot,
                {
                  backgroundColor: isReminding ? "#16A34A" : "#EF4444",
                },
              ]}
            />

            <View>
              <Text style={styles.statusTitle}>Reminder Status</Text>
              <Text style={styles.statusSubtitle}>
                {isReminding
                  ? "Your reminders are active"
                  : "No active reminders"}
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.statusBadge,
              isReminding ? styles.activeBadge : styles.inactiveBadge,
            ]}
          >
            <Text
              style={[
                styles.statusBadgeText,
                { color: isReminding ? "#15803D" : "#DC2626" },
              ]}
            >
              {isReminding ? "ACTIVE" : "INACTIVE"}
            </Text>
          </View>
        </View>

        {/* Start button */}
        <Pressable
          style={({ pressed }) => [
            styles.startButton,
            pressed && styles.pressed,
          ]}
          onPress={scheduleReminder}
        >
          <Text style={styles.startButtonText}>START REMINDERS</Text>
          <Text style={styles.buttonArrow}>→</Text>
        </Pressable>

        {/* Stop button */}
        <Pressable
          style={({ pressed }) => [
            styles.stopButton,
            pressed && styles.pressed,
          ]}
          onPress={stopReminder}
        >
          <Text style={styles.stopButtonText}>STOP REMINDERS</Text>
        </Pressable>
      </View>

      {/* Benefits section */}
      <View style={styles.benefitsCard}>
        <Text style={styles.benefitsTitle}>Why drink water?</Text>

        <View style={styles.benefitRow}>
          <Text style={styles.benefitEmoji}>✨</Text>
          <Text style={styles.benefitText}>Supports healthy skin</Text>
        </View>

        <View style={styles.benefitRow}>
          <Text style={styles.benefitEmoji}>🌡️</Text>
          <Text style={styles.benefitText}>Regulates body temperature</Text>
        </View>

        <View style={styles.benefitRow}>
          <Text style={styles.benefitEmoji}>❤️</Text>
          <Text style={styles.benefitText}>Supports normal body functions</Text>
        </View>
      </View>

      <Text style={styles.footer}>MADE FOR A HEALTHIER LIFESTYLE 💧</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F1F7FC",
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 35,
  },

  welcome: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
    marginTop: 10,
  },

  greeting: {
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#0EA5E9",
    marginBottom: 7,
  },

  welcomeTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#12304A",
  },

  welcomeSubtitle: {
    fontSize: 13,
    color: "#718096",
    marginTop: 5,
  },

  waterIcon: {
    width: 62,
    height: 62,
    borderRadius: 22,
    backgroundColor: "#DDF4FF",
    justifyContent: "center",
    alignItems: "center",
  },

  waterEmoji: {
    fontSize: 32,
  },

  mainCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 21,
    shadowColor: "#1E6091",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.07,
    shadowRadius: 14,
    elevation: 3,
  },

  cardHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardEyebrow: {
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1.5,
    color: "#0EA5E9",
  },

  cardTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#12304A",
    marginTop: 5,
  },

  glassIcon: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: "#E7F7FD",
    justifyContent: "center",
    alignItems: "center",
  },

  glassEmoji: {
    fontSize: 29,
  },

  description: {
    color: "#718096",
    fontSize: 13,
    lineHeight: 21,
    marginTop: 17,
  },

  divider: {
    height: 1,
    backgroundColor: "#EDF2F7",
    marginVertical: 20,
  },

  inputLabel: {
    color: "#38536C",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 9,
    marginTop: 13,
  },

  input: {
    backgroundColor: "#F6FAFD",
    borderWidth: 1,
    borderColor: "#E2EDF5",
    borderRadius: 13,
    paddingHorizontal: 15,
    paddingVertical: 14,
    color: "#243B53",
    fontSize: 14,
    minHeight: 52,
  },

  intervalContainer: {
    backgroundColor: "#F6FAFD",
    borderWidth: 1,
    borderColor: "#E2EDF5",
    borderRadius: 13,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 53,
  },

  intervalInput: {
    flex: 1,
    color: "#243B53",
    fontSize: 17,
    fontWeight: "bold",
  },

  intervalUnit: {
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#8296A8",
  },

  statusCard: {
    backgroundColor: "#F6FAFD",
    borderRadius: 14,
    padding: 14,
    marginTop: 23,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  statusLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },

  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  statusTitle: {
    color: "#243B53",
    fontSize: 13,
    fontWeight: "bold",
  },

  statusSubtitle: {
    fontSize: 10,
    color: "#8296A8",
    marginTop: 3,
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 20,
  },

  activeBadge: {
    backgroundColor: "#DCFCE7",
  },

  inactiveBadge: {
    backgroundColor: "#FEE2E2",
  },

  statusBadgeText: {
    fontSize: 9,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },

  startButton: {
    height: 53,
    borderRadius: 14,
    backgroundColor: "#0EA5E9",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  startButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 13,
    letterSpacing: 1,
  },

  buttonArrow: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    position: "absolute",
    right: 19,
  },

  stopButton: {
    height: 49,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#FECACA",
    backgroundColor: "#FFF7F7",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 11,
  },

  stopButtonText: {
    color: "#DC4444",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },

  benefitsCard: {
    backgroundColor: "#E3F4FC",
    borderRadius: 20,
    padding: 19,
    marginTop: 20,
  },

  benefitsTitle: {
    color: "#123F60",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 15,
  },

  benefitRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 11,
  },

  benefitEmoji: {
    fontSize: 19,
  },

  benefitText: {
    fontSize: 13,
    color: "#46647B",
  },

  footer: {
    textAlign: "center",
    fontSize: 9,
    fontWeight: "bold",
    letterSpacing: 1.5,
    color: "#94AFC1",
    marginTop: 25,
  },
});
