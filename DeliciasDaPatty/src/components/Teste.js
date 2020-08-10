import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Teste extends Component {
    render () {
        return (
            <View style={{ width: 200, height: 200, backgroundColor: 'red' }}>
                <Text>Teste</Text>
            </View>
        );
    };
};