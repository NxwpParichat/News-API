import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native"

const App = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={require('../img/3.png')} />
            <Text style={styles.welcome}>🙏🏻 WELCOME 🙏🏻</Text>
            <View style={styles.separator} />
            <View style={styles.frame}>
                <Image
                    style={{ alignSelf: 'center', width: 320, height: 100, }}
                    source={require('../img/des.png')} />
            </View>
            <View style={styles.separator} />
            <Image
                style={{ alignSelf: 'center', width: 300, height: 150, }}
                source={require('../img/name.png')} />
            <View style={styles.separator} />
            <TouchableOpacity
                onPress={() => navigation.navigate('Main')}>
                <Text style={styles.button}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8CBEB2',
        justifyContent: "center",
    },
    icon: {
        width: 160,
        height: 160,
        alignSelf: 'center',
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 100,
    },
    welcome: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 15,
        textShadowColor: 'black',
        textShadowOffset :{width: 1, height: 1}
    },
    frame: {
        backgroundColor: '#F2EBBF',
        marginHorizontal: 30,
        borderRadius: 15,
        paddingVertical: 5,
        borderWidth: 3,
        borderColor: "#f9f5df",
    },
    present: {
        fontSize: 25,
        color: '#fff',
        alignSelf: 'center',
        paddingBottom: 8,
        fontWeight: 'bold',

    },
    button: {
        width: 150,
        textAlign: "center",
        borderWidth: 3,
        borderColor: "#faf9f9",
        padding: 5,
        fontSize: 24,
        backgroundColor: "#5C4B51",
        borderRadius: 10,
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    separator: {
        height: 20,
    },
    textTitle: {
        color: 'black',
        fontSize: '26',
        alignSelf: 'center'
    }

})

export default App;
