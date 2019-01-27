import React from 'react';
import { View, Text } from 'react-native';

const Definition = ({ id, definition, example }) => {
    return (
        <View key={id}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ width: 20, fontSize: 12, fontWeight: 'bold' }}>{id}</Text>
                <Text style={{ fontFamily: 'Prata-Regular' }}>{definition}</Text>
            </View>
            <Text style={{ fontWeight: 'bold', marginLeft: 15, fontFamily: 'Prata-Regular' }}>{example}</Text>
        </View>
    );
}

export default Definition;