import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default () => (
    <SafeAreaView>
        <Text style={style.App}>olá mundo</Text>
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        textAlign: 'center'
    }
}); 
