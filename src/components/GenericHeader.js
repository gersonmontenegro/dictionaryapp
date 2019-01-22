import React from 'react';
import { View, Text } from 'react-native';
import { searchStyles } from 'src/screens/search/Search.styles';

const GenericHeader = ({ title }) => {
    return (
        <View style={searchStyles.headerContainer}>
            <Text style={searchStyles.textHeader}>{title}</Text>
        </View>
    );
}

export default GenericHeader;