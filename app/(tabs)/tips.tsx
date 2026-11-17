import { ScrollView, StyleSheet, Text, View } from "react-native";

const tips = [
  {
    icon: "✨",
    title: "Healthy Skin",
    description:
      "Water helps maintain skin hydration and supports healthy-looking skin.",
    color: "#EAF5FF",
  },
  {
    icon: "🌡️",
    title: "Body Temperature",
    description:
      "Water helps regulate your body temperature throughout the day.",
    color: "#FFF4E8",
  },
  {
    icon: "💧",
    title: "Flushes Body Waste",
    description: "Water supports the kidneys in removing waste from the body.",
    color: "#E7F9F4",
  },
  {
    icon: "❤️",
    title: "Blood Pressure",
    description:
      "Maintaining proper hydration supports normal circulation and blood pressure.",
    color: "#FFF0F1",
  },
];

export default function TipsTab() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Introduction */}
      <View style={styles.hero}>
        <View style={styles.heroIcon}>
          <Text style={styles.heroEmoji}>🌊</Text>
        </View>

        <Text style={styles.eyebrow}>HEALTHY LIFESTYLE</Text>

        <Text style={styles.heroTitle}>Why Hydrate?</Text>

        <Text style={styles.heroDescription}>
          Discover how drinking enough water helps your body stay healthy and
          active every day.
        </Text>
      </View>

      {/* Benefits heading */}
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>Benefits of Water</Text>
          <Text style={styles.sectionSubtitle}>
            Four reasons to stay hydrated
          </Text>
        </View>

        <Text style={styles.sectionIcon}>💧</Text>
      </View>

      {/* Benefit cards */}
      {tips.map((tip, index) => (
        <View style={styles.tipCard} key={tip.title}>
          <View
            style={[styles.tipIconContainer, { backgroundColor: tip.color }]}
          >
            <Text style={styles.tipIcon}>{tip.icon}</Text>
          </View>

          <View style={styles.tipTextContainer}>
            <Text style={styles.tipNumber}>BENEFIT 0{index + 1}</Text>

            <Text style={styles.tipTitle}>{tip.title}</Text>

            <Text style={styles.tipDescription}>{tip.description}</Text>
          </View>
        </View>
      ))}

      {/* Reminder message */}
      <View style={styles.quoteCard}>
        <Text style={styles.quoteEmoji}>💦</Text>

        <Text style={styles.quoteTitle}>Make Hydration a Habit!</Text>

        <Text style={styles.quoteDescription}>
          Small steps every day can help you maintain healthy hydration habits.
        </Text>
      </View>

      <Text style={styles.footer}>HYDRATION REMINDER • HEALTHY LIVING</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F1F7FC",
  },

  content: {
    padding: 20,
    paddingBottom: 35,
  },

  hero: {
    alignItems: "center",
    backgroundColor: "#E2F4FD",
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 27,
    marginBottom: 27,
  },

  heroIcon: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  heroEmoji: {
    fontSize: 39,
  },

  eyebrow: {
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#0EA5E9",
    marginBottom: 8,
  },

  heroTitle: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#12304A",
  },

  heroDescription: {
    fontSize: 13,
    lineHeight: 21,
    color: "#647C90",
    textAlign: "center",
    marginTop: 10,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 17,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#12304A",
  },

  sectionSubtitle: {
    fontSize: 12,
    color: "#8296A8",
    marginTop: 5,
  },

  sectionIcon: {
    fontSize: 27,
  },

  tipCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    padding: 17,
    marginBottom: 13,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#1E6091",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.045,
    shadowRadius: 9,
    elevation: 2,
  },

  tipIconContainer: {
    width: 55,
    height: 55,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  tipIcon: {
    fontSize: 27,
  },

  tipTextContainer: {
    flex: 1,
  },

  tipNumber: {
    fontSize: 9,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#0EA5E9",
    marginBottom: 5,
  },

  tipTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#243B53",
    marginBottom: 5,
  },

  tipDescription: {
    fontSize: 12,
    color: "#8296A8",
    lineHeight: 18,
  },

  quoteCard: {
    backgroundColor: "#123F60",
    borderRadius: 21,
    padding: 22,
    alignItems: "center",
    marginTop: 10,
  },

  quoteEmoji: {
    fontSize: 30,
    marginBottom: 10,
  },

  quoteTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },

  quoteDescription: {
    fontSize: 12,
    color: "#D5EAF5",
    textAlign: "center",
    lineHeight: 20,
    marginTop: 9,
  },

  footer: {
    textAlign: "center",
    fontSize: 9,
    fontWeight: "bold",
    letterSpacing: 1.2,
    color: "#94AFC1",
    marginTop: 25,
  },
});
