import React from 'react';
import { View, Text } from 'react-native';

const Definition = ({ key, definition, example }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ width: 20, fontSize: 12, fontWeight: 'bold' }}>{key}</Text>
                <Text style={{ fontFamily: 'Prata-Regular' }}>{definition}</Text>
            </View>
            <Text style={{ fontWeight: 'bold', marginLeft: 15, fontFamily: 'Prata-Regular' }}>{example}</Text>
        </View>
    );
}

export default Definition;