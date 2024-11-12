import { Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome"; // Make sure to install react-native-vector-icons

export default function Rekomendasi() {
    // Static data for recommendation icons and topics
    const recommendations = [
        { id: 1, title: "Technology", icon: "laptop" },
        { id: 2, title: "Health", icon: "heartbeat" },
        { id: 3, title: "Travel", icon: "plane" },
        { id: 4, title: "Education", icon: "book" },
        { id: 5, title: "Finance", icon: "dollar" },
        { id: 6, title: "Sports", icon: "soccer-ball-o" },
        { id: 7, title: "Lifestyle", icon: "leaf" },
        { id: 8, title: "Entertainment", icon: "film" },
    ];

    const renderRecommendation = ({ item }) => (
        <TouchableOpacity style={styles.iconContainer} onPress={() => alert("Selected: " + item.title)}>
            <Icon name={item.icon} size={40} color="#007bff" style={styles.icon} />
            <Text style={styles.iconLabel}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Recommended Topics</Text>
            <FlatList
                data={recommendations}
                renderItem={renderRecommendation}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.grid}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f2f5",
        paddingTop: 20,
    },
    pageTitle: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginBottom: 20,
    },
    grid: {
        paddingHorizontal: 16,
    },
    iconContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    icon: {
        marginBottom: 8,
    },
    iconLabel: {
        fontSize: 16,
        color: "#333",
        fontWeight: "500",
    },
});
