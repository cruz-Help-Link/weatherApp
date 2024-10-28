
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handlePress = () => {
        // onSearch(query);
        if (query.trim()) {
            onSearch(query);  
        } else {
            console.warn("Please enter a location.");
        }
    };

    return (
        <View style={styles.searchbar}>
            <TextInput
                style={styles.searchBox}
                placeholder="Enter location"
                value={query}
                onChangeText={setQuery}
            />
            <Button title="Search" onPress={handlePress} color="#007AFF" />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    searchbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    searchBox: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        backgroundColor: 'white',
    },
});



