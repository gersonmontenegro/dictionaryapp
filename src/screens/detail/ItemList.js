import React from 'react';
import { Text } from 'react-native';

export const ItemList = ({ text, index }) => {
    return (
        <Text style={{ marginLeft: 20, fontStyle: 'italic', fontSize: 15 }} id={index.toString()}>
            {text}
        </Text>
    );
}
