import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./src/screens/MainScreen"
import HomeScreen from "./src/screens/HomeScreen"

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Main' component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;

//import React, {useState, useEffect} from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
// import axios from 'axios';

// const fetchNews = async () => {
//   const API_KEY = "8e3c5461f8384f8a971c0ea8236a4d92";
//   const BASE_URL =
//   "https://newsapi.org/v2/top-headlines?country=us&apiKey=8e3c5461f8384f8a971c0ea8236a4d92";

//   try{
//     // const response = await fetch(BASE_URL);
//     // const data= await response.json()

//     // if(response.status != 200)
//     // {throw new Error(data.message)}; 

//     const response= await axios.get(BASE_URL);
    
//     return response.data.articles;
//   } 
//   catch(error)
//   {
//     console.error("Error Fetching News",error);
//     throw error;
//   }
// };

// const App = () =>  {
//   const [articles, setArticles] = useState([])
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const loadNews = async () => {
//       try{
//         const newsArticle = await fetchNews();
//         setArticles(newsArticle);
//       } catch {
//           setError(err.message)
//       }

//     };

//     loadNews();
//   }, []);


//   return (
//     <View style={styles.container}>
//     {error && <Text style={{ color: "red"}}>Error: {error}</Text>}
//     <FlatList
//       data={articles}
//       keyExtractor={item => item.url}
//       renderItem={({item}) =>(
//       <View>
//         <Text 
//           style={{ 
//             fontSize: 18, 
//             fontWeight: "bold",
//             padding: 5,
//             backgroundColor: "#D0B49F"}}>
//               {item.title}</Text>
//         <Text style={{ fontStyle: "italic"}}>{item.author}</Text>
//         <Text style={{ fontSize: 16, marginBottom: 5}}>{item.description}</Text>
//         <Image
//           source={{ uri: item.urlToImage }}
//           style={{ width: 100, height: 100, alignSelf: "center"}}
//         />
//       </View>
//       )}
//      />
//       {/* <StatusBar style="auto" /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     padding: 10,
//   },
// });

// export default App;