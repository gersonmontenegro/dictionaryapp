import React from 'react';
import { View, Text } from 'react-native';

const SearchResultsTitle = ({ title }) => {
    return (
        <View style={{ height: 30, backgroundColor: 'gray', justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'Prata-Regular', marginLeft: 5 }}>{title}</Text>
        </View>
    );
}

export default SearchResultsTitle;