import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.eyebrow}>
                <View style={styles.eyebrowDot} />
                <Text style={styles.eyebrowText}>YOUR SPACE</Text>
            </View>

            <Text style={styles.title}>Welcome to{"\n"}your profile!</Text>
            <Text style={styles.intro}>
                A home base for your Dockerfile Lab journey.
            </Text>

            <View style={styles.profileCard}>
                <View style={styles.profileHeader}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>DL</Text>
                    </View>
                    <View style={styles.profileHeading}>
                        <Text style={styles.cardEyebrow}>DOCKERFILE LAB</Text>
                        <Text style={styles.profileLabel}>LEARNER SPACE</Text>
                    </View>
                </View>
                <View style={styles.cardDivider} />
                <Text style={styles.cardTitle}>Stay curious. Keep building.</Text>
                <Text style={styles.cardDescription}>
                    Explore the ideas behind portable apps, one small step at a
                    time.
                </Text>
            </View>

            <View style={styles.note}>
                <Text style={styles.noteMark}>✳</Text>
                <Text style={styles.noteText}>
                    Your next great experiment starts with a little curiosity.
                </Text>
            </View>

            <Link href="/" asChild>
                <Pressable style={styles.button} accessibilityRole="button">
                    <Text style={styles.buttonText}>Back to the home page</Text>
                    <Text style={styles.buttonArrow}>→</Text>
                </Pressable>
            </Link>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f3ed",
    },
    content: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingTop: 38,
        paddingBottom: 32,
    },
    eyebrow: {
        alignSelf: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        borderRadius: 20,
        backgroundColor: "#e8e9df",
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    eyebrowDot: {
        width: 7,
        height: 7,
        borderRadius: 4,
        backgroundColor: "#b35d3f",
    },
    eyebrowText: {
        color: "#34463d",
        fontSize: 11,
        fontWeight: "700",
        letterSpacing: 1.2,
    },
    title: {
        marginTop: 28,
        color: "#1d332c",
        fontSize: 40,
        fontWeight: "800",
        letterSpacing: -1.5,
        lineHeight: 46,
    },
    intro: {
        marginTop: 14,
        color: "#65716a",
        fontSize: 16,
        lineHeight: 25,
    },
    profileCard: {
        marginTop: 30,
        borderRadius: 24,
        backgroundColor: "#203b33",
        padding: 22,
    },
    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 13,
    },
    avatar: {
        width: 48,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 17,
        backgroundColor: "#d97c57",
    },
    avatarText: {
        color: "#fffaf1",
        fontSize: 15,
        fontWeight: "800",
        letterSpacing: 0.5,
    },
    profileHeading: {
        gap: 5,
    },
    cardEyebrow: {
        color: "#c4d2bf",
        fontSize: 10,
        fontWeight: "700",
        letterSpacing: 1.4,
    },
    profileLabel: {
        color: "#e4e9e0",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0.8,
    },
    cardDivider: {
        height: 1,
        marginTop: 22,
        backgroundColor: "#496055",
    },
    cardTitle: {
        marginTop: 20,
        color: "#fffdf6",
        fontSize: 22,
        fontWeight: "700",
        letterSpacing: -0.5,
    },
    cardDescription: {
        marginTop: 8,
        color: "#c6d0c8",
        fontSize: 14,
        lineHeight: 22,
    },
    note: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginTop: 25,
        borderRadius: 18,
        backgroundColor: "#e8e9df",
        padding: 17,
    },
    noteMark: {
        color: "#b35d3f",
        fontSize: 21,
    },
    noteText: {
        flex: 1,
        color: "#58655d",
        fontSize: 13,
        fontWeight: "600",
        lineHeight: 20,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 22,
        borderRadius: 16,
        backgroundColor: "#d97c57",
        paddingHorizontal: 19,
        paddingVertical: 17,
    },
    buttonText: {
        color: "#201f1a",
        fontSize: 15,
        fontWeight: "700",
    },
    buttonArrow: {
        color: "#201f1a",
        fontSize: 20,
        fontWeight: "600",
    },
});
