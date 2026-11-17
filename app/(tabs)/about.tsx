import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AboutTab() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* About hero */}
      <View style={styles.hero}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>💧</Text>
        </View>

        <Text style={styles.eyebrow}>ABOUT THE APPLICATION</Text>

        <Text style={styles.title}>Hydration Reminder</Text>

        <Text style={styles.subtitle}>
          Your daily companion for healthier hydration habits.
        </Text>

        <View style={styles.versionBadge}>
          <Text style={styles.versionText}>VERSION 1.0.0</Text>
        </View>
      </View>

      {/* Application information */}
      <Text style={styles.sectionTitle}>About This App</Text>

      <View style={styles.infoCard}>
        <Text style={styles.infoIcon}>📱</Text>

        <Text style={styles.infoDescription}>
          Hydration Reminder is a mobile application developed to help users
          maintain regular water-drinking habits through scheduled local
          notifications.
        </Text>

        <View style={styles.divider} />

        <View style={styles.featureRow}>
          <Text style={styles.featureEmoji}>⏰</Text>
          <Text style={styles.featureText}>Custom reminder intervals</Text>
        </View>

        <View style={styles.featureRow}>
          <Text style={styles.featureEmoji}>🔔</Text>
          <Text style={styles.featureText}>Scheduled local notifications</Text>
        </View>

        <View style={styles.featureRow}>
          <Text style={styles.featureEmoji}>💧</Text>
          <Text style={styles.featureText}>Hydration benefits and tips</Text>
        </View>
      </View>

      {/* Developer information */}
      <Text style={styles.sectionTitle}>Developer Information</Text>

      <View style={styles.developerCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>IU</Text>
        </View>

        <Text style={styles.developerLabel}>DEVELOPED BY</Text>

        <Text style={styles.developerName}>Isuru Udeshitha</Text>

        <Text style={styles.course}>Mobile Application Development</Text>

        <View style={styles.universityBadge}>
          <Text style={styles.universityIcon}>🎓</Text>

          <Text style={styles.universityText}>University of Kelaniya</Text>
        </View>
      </View>

      {/* Technology information */}
      <Text style={styles.sectionTitle}>Technologies Used</Text>

      <View style={styles.techContainer}>
        <View style={styles.techBadge}>
          <Text style={styles.techText}>React Native</Text>
        </View>

        <View style={styles.techBadge}>
          <Text style={styles.techText}>Expo</Text>
        </View>

        <View style={styles.techBadge}>
          <Text style={styles.techText}>TypeScript</Text>
        </View>

        <View style={styles.techBadge}>
          <Text style={styles.techText}>Expo Router</Text>
        </View>

        <View style={styles.techBadge}>
          <Text style={styles.techText}>Expo Notifications</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerEmoji}>💧</Text>

        <Text style={styles.footerTitle}>Stay Healthy. Stay Hydrated.</Text>

        <Text style={styles.footerText}>
          Made with care for a healthier lifestyle.
        </Text>
      </View>
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
    backgroundColor: "#E2F4FD",
    borderRadius: 25,
    alignItems: "center",
    padding: 27,
    marginBottom: 28,
  },

  logoContainer: {
    width: 85,
    height: 85,
    backgroundColor: "#FFFFFF",
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 17,
  },

  logo: {
    fontSize: 48,
  },

  eyebrow: {
    fontSize: 10,
    color: "#0EA5E9",
    fontWeight: "bold",
    letterSpacing: 1.8,
    marginBottom: 9,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#12304A",
    textAlign: "center",
  },

  subtitle: {
    color: "#647C90",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 21,
    marginTop: 10,
  },

  versionBadge: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 17,
  },

  versionText: {
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#0EA5E9",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#12304A",
    marginBottom: 14,
  },

  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
    shadowColor: "#1E6091",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.045,
    shadowRadius: 9,
    elevation: 2,
  },

  infoIcon: {
    fontSize: 29,
    marginBottom: 12,
  },

  infoDescription: {
    color: "#718096",
    fontSize: 13,
    lineHeight: 22,
  },

  divider: {
    height: 1,
    backgroundColor: "#EDF2F7",
    marginVertical: 18,
  },

  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
    gap: 12,
  },

  featureEmoji: {
    fontSize: 18,
  },

  featureText: {
    fontSize: 13,
    color: "#38536C",
    fontWeight: "500",
  },

  developerCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 21,
    padding: 24,
    alignItems: "center",
    marginBottom: 25,
    shadowColor: "#1E6091",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.045,
    shadowRadius: 9,
    elevation: 2,
  },

  avatar: {
    width: 76,
    height: 76,
    borderRadius: 26,
    backgroundColor: "#DDF4FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  avatarText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0284C7",
  },

  developerLabel: {
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1.5,
    color: "#0EA5E9",
  },

  developerName: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#12304A",
    marginTop: 9,
  },

  course: {
    fontSize: 12,
    color: "#8296A8",
    marginTop: 8,
    textAlign: "center",
  },

  universityBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F7FC",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 11,
    marginTop: 18,
    gap: 8,
  },

  universityIcon: {
    fontSize: 17,
  },

  universityText: {
    color: "#38536C",
    fontSize: 12,
    fontWeight: "600",
  },

  techContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 25,
  },

  techBadge: {
    backgroundColor: "#E2F4FD",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  techText: {
    color: "#0879B3",
    fontSize: 11,
    fontWeight: "600",
  },

  footer: {
    backgroundColor: "#123F60",
    borderRadius: 20,
    padding: 23,
    alignItems: "center",
  },

  footerEmoji: {
    fontSize: 29,
    marginBottom: 10,
  },

  footerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },

  footerText: {
    fontSize: 11,
    color: "#D5EAF5",
    marginTop: 8,
    textAlign: "center",
  },
});
