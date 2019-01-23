import React from 'react';
import { View, Text } from 'react-native';
import { searchStyles } from 'src/screens/search/Search.styles';

const SearchResultsTitle = ({ title }) => {
    return (
        <View style={searchStyles.searchResultsTitleContainer}>
            <Text style={searchStyles.searchResultsTitle}>{title}</Text>
        </View>
    );
}

export default SearchResultsTitle;