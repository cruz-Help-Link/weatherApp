import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const SearchBar = ({}) => {
    const [query, setQuery] = useState('');


    return(
        <View style={styles.searchbar}>
            <TextInput style={styles.searchBox}
            placeholder="Enter location"
            value={query}
            onChange={setQuery} />

            <Button style={styles.button} />
        </View>
    )
} 

export default SearchBar;

const styles = StyleSheet.create({
    searchbar: {
        position: 'absolute',  // Make the bar stick at the top
        top: 0,                // Align it to the top of the screen
        left: 0,
        right: 0,
        flexDirection: 'row',  // Align items in a row
        alignItems: 'center',
        justifyContent: 'space-between',  // Space between input and button
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    searchBox: {
        flex: 1,              // Make the input box take up most space
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        backgroundColor: 'white',
    },
    button: {
        height: 40,
        width: 100,
        backgroundColor: '#007AFF',
        color: 'white',
        borderRadius: 5,
    },
});