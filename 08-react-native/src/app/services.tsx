import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ServicesScreen() {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.eyebrow}>YOUR NEXT STEPS</Text>
            <Text style={styles.title}>Explore the lab.</Text>
            <Text style={styles.intro}>
                Explore our services! Pick an idea and see where building takes
                you.
            </Text>

            <View style={styles.serviceCard}>
                <View style={styles.cardTop}>
                    <Text style={styles.cardNumber}>01</Text>
                    <View style={styles.cardIcon}>
                        <Text style={styles.cardIconText}>⌘</Text>
                    </View>
                </View>
                <Text style={styles.cardTitle}>Start with the source</Text>
                <Text style={styles.cardDescription}>
                    Get familiar with the app before you package it up.
                </Text>
            </View>

            <View style={[styles.serviceCard, styles.serviceCardTinted]}>
                <View style={styles.cardTop}>
                    <Text style={[styles.cardNumber, styles.cardNumberTinted]}>
                        02
                    </Text>
                    <View style={[styles.cardIcon, styles.cardIconLight]}>
                        <Text
                            style={[
                                styles.cardIconText,
                                styles.cardIconTextTinted,
                            ]}
                        >
                            ▤
                        </Text>
                    </View>
                </View>
                <Text style={[styles.cardTitle, styles.cardTitleTinted]}>
                    Understand the container
                </Text>
                <Text
                    style={[
                        styles.cardDescription,
                        styles.cardDescriptionTinted,
                    ]}
                >
                    Explore how a Dockerfile describes a portable environment.
                </Text>
            </View>

            <View style={styles.serviceCard}>
                <View style={styles.cardTop}>
                    <Text style={styles.cardNumber}>03</Text>
                    <View style={styles.cardIcon}>
                        <Text style={styles.cardIconText}>↗</Text>
                    </View>
                </View>
                <Text style={styles.cardTitle}>Keep experimenting</Text>
                <Text style={styles.cardDescription}>
                    Try an idea, learn from it, and build the next one.
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
        color: "#b35d3f",
        fontSize: 11,
        fontWeight: "700",
        letterSpacing: 1.6,
    },
    title: {
        marginTop: 18,
        color: "#1d332c",
        fontSize: 40,
        fontWeight: "800",
        letterSpacing: -1.5,
    },
    intro: {
        marginTop: 12,
        color: "#65716a",
        fontSize: 16,
        lineHeight: 25,
    },
    serviceCard: {
        marginTop: 19,
        borderRadius: 21,
        backgroundColor: "#203b33",
        padding: 20,
    },
    serviceCardTinted: {
        backgroundColor: "#e8e9df",
    },
    cardTop: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cardNumber: {
        color: "#e2a982",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0.7,
    },
    cardNumberTinted: {
        color: "#b35d3f",
    },
    cardIcon: {
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        backgroundColor: "#355247",
    },
    cardIconLight: {
        backgroundColor: "#d6d9cd",
    },
    cardIconText: {
        color: "#fffdf6",
        fontSize: 18,
        fontWeight: "700",
    },
    cardIconTextTinted: {
        color: "#1d332c",
    },
    cardTitle: {
        marginTop: 15,
        color: "#fffdf6",
        fontSize: 19,
        fontWeight: "700",
        letterSpacing: -0.3,
    },
    cardTitleTinted: {
        color: "#1d332c",
    },
    cardDescription: {
        marginTop: 6,
        color: "#c6d0c8",
        fontSize: 14,
        lineHeight: 21,
    },
    cardDescriptionTinted: {
        color: "#58655d",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 24,
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
