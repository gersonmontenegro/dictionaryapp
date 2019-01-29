import React from 'react';
import { View, Text } from 'react-native';

const Pronuntiation = ({ pron }) => {
    return (
        <View style={{ marginTop: 10, marginLeft: 5 }}>
            <Text style={{ fontFamily: 'Prata-Regular', fontWeight: 'bold', color: 'black' }}>Pronuntiation</Text>
            <Text style={{ fontFamily: 'Prata-Regular', fontWeight: 'bold', color: 'black' }}>{pron}</Text>
        </View>
    );
}

export default Pronuntiation;