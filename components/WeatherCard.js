import React from "react";
import { View, Text, StyleSheet } from "react-native";


const WeatherCard = ({weather}) => {
    return(
        <View style={styles.card}>
            <Text style={styles.location}>{weather.location}</Text>
            <Text style={styles.temp}>{weather.temp}°C</Text>
            <Text style={styles.description}>{weather.description}✨</Text>
        </View>
    )
}

export default WeatherCard;

const styles = StyleSheet.create({
    card: {
        marging: 20,
        padding: 20,
    },
    location: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    temp: {
        fontSize: 30,
        fontWeight: '500',
    },
    description: {
        fontSize: 15,
        color: 'white',
    }
})