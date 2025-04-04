import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Signin() {
    const navigation = useNavigation();

    return (
        <View style={Styles.container}>
            <TouchableOpacity
                style={Styles.button}
                onPress={() => navigation.navigate("Home", { screen: "Home" })}
            >
                <Text>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Signin;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
});
