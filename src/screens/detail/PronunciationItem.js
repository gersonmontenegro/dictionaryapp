import React from 'react';
import { View, Text } from 'react-native';

const PronunciationItem = ({ title, value, color }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontFamily: 'Prata-Regular', fontStyle: 'italic' }}>
                {title}
            </Text>
            <Text style={{ fontFamily: 'Prata-Regular', fontWeight: 'bold', color: color, marginLeft: 10 }}>
                {value}
            </Text>
        </View>
    );
}

export default PronunciationItem;