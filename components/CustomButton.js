import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, Pressable } from 'react-native';

const CustomBotton = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : 'blue',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    }
})
export default CustomBotton