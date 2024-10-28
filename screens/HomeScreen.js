import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import fetchWeather from "../utils/api";

const HomeScreen = () => {
    const [weather, setWeather] = useState(null);

    const handleSearch = async (query) => {
        const data = await fetchWeather(query);
        if (data) {
            setWeather({
                location: data.name,
                temp: data.main.temp,
                description: data.weather[0].description,
            });
        }
    };

    return (
        <View style={styles.container}>
            <SearchBar onSearch={handleSearch} />
            {weather && <WeatherCard weather={weather} />}
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
