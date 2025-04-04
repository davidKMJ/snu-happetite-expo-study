
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Screen1() {
    return (
        <View style={Styles.container}>
        </View>
    );
}

export default Screen1;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
