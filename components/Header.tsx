import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
    return (
        <View style={{ ...styles.container }}>
            <Image source={require('@/assets/images/muhlis.png')} style={styles.UserImage} />
            <TouchableOpacity>
                <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    UserImage: {
        width: 50,
        height: 50,
        borderRadius: 30
    },
    UserInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    }
});