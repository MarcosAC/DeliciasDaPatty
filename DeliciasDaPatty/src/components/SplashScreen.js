import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

function Welcome() {  
    
    componentDidMount = () => {
        setTimeout(
            () => { navigation.navigate('MainPage') },
            2000
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Delicias da Patty</Text>            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        fontSize: 50,
        fontWeight: 'bold'
    }
})

export default Welcome;