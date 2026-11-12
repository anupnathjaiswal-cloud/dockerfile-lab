import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.eyebrow}>
                <View style={styles.eyebrowDot} />
                <Text style={styles.eyebrowText}>DOCKERFILE LAB · 08</Text>
            </View>

            <Text style={styles.title}>Build once.{"\n"}Run anywhere.</Text>
            <Text style={styles.intro}>
                A hands-on React Native playground for learning how apps make
                their way into containers.
            </Text>

            <View style={styles.featureCard}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardEyebrow}>THE PLAYGROUND</Text>
                    <View style={styles.liveBadge}>
                        <View style={styles.liveDot} />
                        <Text style={styles.liveText}>READY TO EXPLORE</Text>
                    </View>
                </View>
                <Text style={styles.cardTitle}>
                    From source to running app.
                </Text>
                <Text style={styles.cardDescription}>
                    Follow the path from your code to a portable container.
                </Text>

                <View style={styles.steps}>
                    <View style={styles.step}>
                        <Text style={styles.stepNumber}>01</Text>
                        <Text style={styles.stepLabel}>WRITE</Text>
                    </View>
                    <View style={styles.stepDivider} />
                    <View style={styles.step}>
                        <Text style={styles.stepNumber}>02</Text>
                        <Text style={styles.stepLabel}>PACKAGE</Text>
                    </View>
                    <View style={styles.stepDivider} />
                    <View style={styles.step}>
                        <Text style={styles.stepNumber}>03</Text>
                        <Text style={styles.stepLabel}>RUN</Text>
                    </View>
                </View>
            </View>

            <Link href="/about" asChild>
                <Pressable style={styles.button} accessibilityRole="button">
                    <Text style={styles.buttonText}>Get to know the lab</Text>
                    <Text style={styles.buttonArrow}>→</Text>
                </Pressable>
            </Link>

            <View style={styles.exploreSection}>
                <View style={styles.sectionHeading}>
                    <Text style={styles.sectionEyebrow}>KEEP EXPLORING</Text>
                    <Text style={styles.sectionHint}>Choose your next stop</Text>
                </View>
                <View style={styles.routeList}>
                    <Link href="/profile" asChild>
                        <Pressable
                            style={styles.routeItem}
                            accessibilityRole="button"
                        >
                            <View style={styles.routeNumber}>
                                <Text style={styles.routeNumberText}>01</Text>
                            </View>
                            <View style={styles.routeCopy}>
                                <Text style={styles.routeTitle}>Your profile</Text>
                                <Text style={styles.routeDescription}>
                                    Your place in the lab
                                </Text>
                            </View>
                            <Text style={styles.routeArrow}>↗</Text>
                        </Pressable>
                    </Link>
                    <Link href="/services" asChild>
                        <Pressable
                            style={styles.routeItem}
                            accessibilityRole="button"
                        >
                            <View style={styles.routeNumber}>
                                <Text style={styles.routeNumberText}>02</Text>
                            </View>
                            <View style={styles.routeCopy}>
                                <Text style={styles.routeTitle}>Explore the lab</Text>
                                <Text style={styles.routeDescription}>
                                    Ideas for the next build
                                </Text>
                            </View>
                            <Text style={styles.routeArrow}>↗</Text>
                        </Pressable>
                    </Link>
                    <Link href="/contact" asChild>
                        <Pressable
                            style={styles.routeItem}
                            accessibilityRole="button"
                        >
                            <View style={styles.routeNumber}>
                                <Text style={styles.routeNumberText}>03</Text>
                            </View>
                            <View style={styles.routeCopy}>
                                <Text style={styles.routeTitle}>Get in touch</Text>
                                <Text style={styles.routeDescription}>
                                    Questions, ideas, feedback
                                </Text>
                            </View>
                            <Text style={styles.routeArrow}>↗</Text>
                        </Pressable>
                    </Link>
                </View>
            </View>
            <Text style={styles.footer}>
                LEARN BY BUILDING · SHIP WITH CONFIDENCE
            </Text>
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
        fontSize: 42,
        fontWeight: "800",
        letterSpacing: -1.7,
        lineHeight: 47,
    },
    intro: {
        maxWidth: 340,
        marginTop: 14,
        color: "#65716a",
        fontSize: 16,
        lineHeight: 25,
    },
    featureCard: {
        marginTop: 30,
        borderRadius: 24,
        backgroundColor: "#203b33",
        padding: 22,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
    },
    cardEyebrow: {
        color: "#c4d2bf",
        fontSize: 10,
        fontWeight: "700",
        letterSpacing: 1.5,
    },
    liveBadge: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        borderRadius: 20,
        backgroundColor: "#355247",
        paddingHorizontal: 9,
        paddingVertical: 6,
    },
    liveDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: "#d7a278",
    },
    liveText: {
        color: "#e7e9dd",
        fontSize: 8,
        fontWeight: "700",
        letterSpacing: 0.8,
    },
    cardTitle: {
        marginTop: 23,
        color: "#fffdf6",
        fontSize: 23,
        fontWeight: "700",
        letterSpacing: -0.5,
    },
    cardDescription: {
        marginTop: 8,
        color: "#c6d0c8",
        fontSize: 14,
        lineHeight: 21,
    },
    steps: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 24,
        borderTopWidth: 1,
        borderTopColor: "#496055",
        paddingTop: 18,
    },
    step: {
        flex: 1,
        gap: 5,
    },
    stepNumber: {
        color: "#e2a982",
        fontSize: 18,
        fontWeight: "700",
    },
    stepLabel: {
        color: "#e4e9e0",
        fontSize: 9,
        fontWeight: "700",
        letterSpacing: 1.1,
    },
    stepDivider: {
        width: 20,
        height: 1,
        marginHorizontal: 8,
        backgroundColor: "#62756a",
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
    exploreSection: {
        marginTop: 30,
    },
    sectionHeading: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 13,
    },
    sectionEyebrow: {
        color: "#34463d",
        fontSize: 10,
        fontWeight: "700",
        letterSpacing: 1.4,
    },
    sectionHint: {
        color: "#8a9289",
        fontSize: 11,
    },
    routeList: {
        gap: 9,
    },
    routeItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 13,
        borderWidth: 1,
        borderColor: "#e5e5db",
        borderRadius: 16,
        backgroundColor: "#fffdf6",
        padding: 12,
    },
    routeNumber: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 13,
        backgroundColor: "#e8e9df",
    },
    routeNumberText: {
        color: "#b35d3f",
        fontSize: 12,
        fontWeight: "700",
    },
    routeCopy: {
        flex: 1,
        gap: 3,
    },
    routeTitle: {
        color: "#1d332c",
        fontSize: 14,
        fontWeight: "700",
    },
    routeDescription: {
        color: "#758078",
        fontSize: 12,
    },
    routeArrow: {
        paddingHorizontal: 5,
        color: "#b35d3f",
        fontSize: 18,
        fontWeight: "600",
    },
    footer: {
        marginTop: 25,
        color: "#8a9289",
        fontSize: 9,
        fontWeight: "700",
        letterSpacing: 1.4,
        textAlign: "center",
    },
});
