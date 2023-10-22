import { useState, useEffect } from "react";
import axios from "axios";
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity } from "react-native";

const Q_Restaurant = ({ navigation }) => {
    const [restaurant, setRestaurant] = useState([]);

    const fetchRes = async () => {
        const API_URL =
            'http://www.qrestaurant.acfs.go.th/webapp/api/shop.php?secret=B%E0%B8%81V%E0%B8%AEd%E0%B8%9ABEwq%E0%B8%A0QR89%E0%B8%9E%E0%B8%949L%E0%B8%AD%E0%B8%A24%E0%B8%A24%E0%B8%84%E0%B8%A9%E0%B8%A35%E0%B8%81V%E0%B8%A3i';

        try {
            const response = await axios.get(API_URL);
            setRestaurant(response.data.data);
        } catch (error) {
            console.error('Error Fetching Data', error.message);
            throw error;
        }
    }

    useEffect(() => { fetchRes(); }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.title}>🍽 Q Restaurant 🍽</Text>
                <Text style={styles.subtitle}>ข้อมูลรายชื่อร้านอาหารวัตถุดิบปลอดภัย</Text>
            </TouchableOpacity>

            <FlatList
                data={restaurant}
                keyExtractor={item => item.branch_id}
                renderItem={({ item }) => (
                    <View style={styles.frame}>
                        <Text style={styles.name}>{item.rest_name}</Text>
                        {item.qpremium == 'y' || item.organic == 'y' || item.halal == 'y' || item.delivery == 'y' ?
                            <Text style={styles.tag}>
                                {item.qpremium == 'y' ? <Text> Q premium </Text> : null}
                                {item.organic == 'y' ? <Text> ,Organic </Text> : null}
                                {item.halal == 'y' ? <Text> Halal </Text> : null}
                                {item.delivery == 'y' ? <Text> Delivery </Text> : null}
                            </Text> : null
                        }
                        <Text style={styles.info}>Restaurant ID : {item.rest_id}</Text>
                        <Text style={styles.info}>Provice ID : {item.province}</Text>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.image}
                        />
                        <Text style={styles.coordinates}>Latitude: {item.latitude}| Longitude: {item.longitude}</Text>
                    </View>
                )}
            />
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8CBEB2',
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#473b3e',
        backgroundColor: '#f69c9c',
        paddingHorizontal: 60,
        marginTop: 10,
    },
    subtitle: {
        fontSize: 15,
        fontStyle: 'italic',
        alignSelf: 'center',
        paddingBottom: 5,
        color: '#fff',
        backgroundColor: '#f69c9c',
        paddingLeft: 60,
        paddingRight: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingVertical: 2,
        borderBottomWidth: 1.25,
        borderBottomColor: '#f69c9c',
        marginBottom: 5,
    },
    coordinates: {
        color: '#5C4B51',
        fontSize: 12,
        fontStyle: 'italic',
        alignSelf: 'center',
        paddingVertical: 2,
    },
    info: {
        fontSize: 15,
        paddingLeft: 18,
        color: '#3a1713',

    },
    tag: {
        backgroundColor: '#F06060',
        borderRadius: 10,
        color: '#fef1f1',
        fontSize: 20,
        fontStyle: 'italic',
        paddingHorizontal: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    frame: {
        backgroundColor: "#F2EBBF",
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 10,
    },
    image: {
        width: 290,
        height: 200,
        alignSelf: 'center',
        borderRadius: 8,
        borderWidth: 3,
        borderColor: '#403538',
        margin: 5,
    },
})


export default Q_Restaurant;
