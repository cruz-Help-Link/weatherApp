// import React from "react";
// import { StyleSheet, View } from "react-native";

// const LocationScreen = () => {

//     return(
//         <View style={styles.container}>
            
//             <FlatList
//         data={sortedLocations}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Text style={styles.location}>{item.name}</Text>
//             <Text style={styles.weather}>{item.weather[0].description}</Text>
//           </View>
//         )}
//       />
//         </View>
//     );

// }

// export default LocationScreen;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 20,
//     },
//     item: {
//       padding: 20,
//       marginBottom: 10,
//       backgroundColor: '#f8f8f8',
//       borderRadius: 10,
//     },
//     location: {
//       fontSize: 18,
//       fontWeight: 'bold',
//     },
//     weather: {
//       fontSize: 16,
//     },
//   });





// LocationScreen.js
import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const LocationScreen = () => {
  // Sample sorted locations data (replace with actual API data or props)
  const [sortedLocations, setSortedLocations] = useState([
    { id: 1, name: "New York", weather: [{ description: "Sunny ☀" }] },
    { id: 2, name: "London", weather: [{ description: "Cloudy ⛅" }] },
    { id: 3, name: "Tokyo", weather: [{ description: "Rainy 🌨" }] },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedLocations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.location}>{item.name}</Text>
            <Text style={styles.weather}>{item.weather[0].description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  weather: {
    fontSize: 16,
  },
});
