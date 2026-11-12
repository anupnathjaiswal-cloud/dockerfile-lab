import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.eyebrow}>A LITTLE ABOUT US</Text>
            <Text style={styles.title}>Small steps.{"\n"}Real containers.</Text>
            <Text style={styles.intro}>
                Dockerfile Lab is a small learning project made for exploring
                how modern apps are built, packaged, and run.
            </Text>

            <View style={styles.missionCard}>
                <View style={styles.missionMark}>
                    <Text style={styles.markText}>✳</Text>
                </View>
                <Text style={styles.cardEyebrow}>THE IDEA</Text>
                <Text style={styles.cardTitle}>Make the invisible feel simple.</Text>
                <Text style={styles.cardDescription}>
                    Containers can sound complex. This lab turns the concepts
                    into small, practical steps you can explore at your own pace.
                </Text>
            </View>

            <View style={styles.routeNote}>
                <Text style={styles.routeNumber}>02</Text>
                <View style={styles.routeCopy}>
                    <Text style={styles.routeTitle}>You found the second route.</Text>
                    <Text style={styles.routeDescription}>
                        This React Native screen is part of the lab’s small,
                        hands-on app.
                    </Text>
                </View>
            </View>

            <Link href="/" asChild>
                <Pressable style={styles.button} accessibilityRole="button">
                    <Text style={styles.buttonArrow}>←</Text>
                    <Text style={styles.buttonText}>Back to the home page</Text>
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
        color: "#b35d3f",
        fontSize: 11,
        fontWeight: "700",
        letterSpacing: 1.6,
    },
    title: {
        marginTop: 18,
        color: "#1d332c",
        fontSize: 39,
        fontWeight: "800",
        letterSpacing: -1.5,
        lineHeight: 45,
    },
    intro: {
        marginTop: 14,
        color: "#65716a",
        fontSize: 16,
        lineHeight: 25,
    },
    missionCard: {
        marginTop: 29,
        borderRadius: 24,
        backgroundColor: "#e8e9df",
        padding: 22,
    },
    missionMark: {
        width: 38,
        height: 38,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        borderRadius: 13,
        backgroundColor: "#d97c57",
    },
    markText: {
        color: "#fffaf1",
        fontSize: 22,
        fontWeight: "700",
    },
    cardEyebrow: {
        color: "#65716a",
        fontSize: 10,
        fontWeight: "700",
        letterSpacing: 1.5,
    },
    cardTitle: {
        marginTop: 10,
        color: "#1d332c",
        fontSize: 23,
        fontWeight: "700",
        letterSpacing: -0.5,
        lineHeight: 29,
    },
    cardDescription: {
        marginTop: 9,
        color: "#58655d",
        fontSize: 14,
        lineHeight: 22,
    },
    routeNote: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        marginTop: 26,
        paddingHorizontal: 4,
    },
    routeNumber: {
        color: "#b35d3f",
        fontSize: 31,
        fontWeight: "700",
        letterSpacing: -1,
    },
    routeCopy: {
        flex: 1,
        gap: 4,
    },
    routeTitle: {
        color: "#1d332c",
        fontSize: 15,
        fontWeight: "700",
    },
    routeDescription: {
        color: "#65716a",
        fontSize: 13,
        lineHeight: 19,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        marginTop: 26,
        borderRadius: 16,
        backgroundColor: "#203b33",
        paddingHorizontal: 19,
        paddingVertical: 17,
    },
    buttonArrow: {
        color: "#e2a982",
        fontSize: 18,
        fontWeight: "600",
    },
    buttonText: {
        color: "#fffdf6",
        fontSize: 15,
        fontWeight: "700",
    },
});
