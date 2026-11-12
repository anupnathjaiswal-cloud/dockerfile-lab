import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ContactScreen() {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.eyebrow}>
                <View style={styles.eyebrowDot} />
                <Text style={styles.eyebrowText}>WE’RE LISTENING</Text>
            </View>

            <Text style={styles.title}>Let’s talk{"\n"}about what you’re building.</Text>
            <Text style={styles.intro}>
                Get in touch with us! Questions, ideas, or feedback are always
                welcome.
            </Text>

            <View style={styles.contactCard}>
                <View style={styles.messageIcon}>
                    <Text style={styles.messageIconText}>✉</Text>
                </View>
                <Text style={styles.cardEyebrow}>A NOTE FROM THE LAB</Text>
                <Text style={styles.cardTitle}>Every great build starts with a question.</Text>
                <Text style={styles.cardDescription}>
                    Thanks for exploring Dockerfile Lab. Keep experimenting,
                    and bring your curiosity along for the ride.
                </Text>
            </View>

            <View style={styles.responseNote}>
                <Text style={styles.responseTitle}>Keep exploring</Text>
                <Text style={styles.responseDescription}>
                    Head back to the home page to find your next step in the lab.
                </Text>
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
        letterSpacing: -1.6,
        lineHeight: 46,
    },
    intro: {
        marginTop: 14,
        color: "#65716a",
        fontSize: 16,
        lineHeight: 25,
    },
    contactCard: {
        marginTop: 30,
        borderRadius: 24,
        backgroundColor: "#203b33",
        padding: 22,
    },
    messageIcon: {
        width: 44,
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 21,
        borderRadius: 15,
        backgroundColor: "#d97c57",
    },
    messageIconText: {
        color: "#fffaf1",
        fontSize: 21,
        fontWeight: "700",
    },
    cardEyebrow: {
        color: "#c4d2bf",
        fontSize: 10,
        fontWeight: "700",
        letterSpacing: 1.5,
    },
    cardTitle: {
        marginTop: 10,
        color: "#fffdf6",
        fontSize: 23,
        fontWeight: "700",
        letterSpacing: -0.5,
        lineHeight: 29,
    },
    cardDescription: {
        marginTop: 9,
        color: "#c6d0c8",
        fontSize: 14,
        lineHeight: 22,
    },
    responseNote: {
        marginTop: 24,
        paddingHorizontal: 4,
    },
    responseTitle: {
        color: "#1d332c",
        fontSize: 16,
        fontWeight: "700",
    },
    responseDescription: {
        marginTop: 5,
        color: "#65716a",
        fontSize: 14,
        lineHeight: 21,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        marginTop: 25,
        borderRadius: 16,
        backgroundColor: "#d97c57",
        paddingHorizontal: 19,
        paddingVertical: 17,
    },
    buttonArrow: {
        color: "#201f1a",
        fontSize: 18,
        fontWeight: "600",
    },
    buttonText: {
        color: "#201f1a",
        fontSize: 15,
        fontWeight: "700",
    },
});
