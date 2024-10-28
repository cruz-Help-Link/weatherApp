// weathercard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WeatherCard = ({ weather }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.location}>{weather.name}</Text>
            <Text style={styles.temp}>{weather.main.temp}°C</Text>
            <Text style={styles.description}>{weather.weather[0].description} ✨</Text>
        </View>
    );
};

export default WeatherCard;

const styles = StyleSheet.create({
    card: {
        margin: 20,
        padding: 20,
        backgroundColor: '#4a90e2',
        borderRadius: 10,
        alignItems: 'center',
    },
    location: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    temp: {
        fontSize: 30,
        fontWeight: '500',
        color: 'white',
    },
    description: {
        fontSize: 15,
        color: 'white',
        textTransform: 'capitalize',
    }
});
