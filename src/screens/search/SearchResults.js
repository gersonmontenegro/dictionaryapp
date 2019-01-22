import React from 'react';
import { View, Text } from 'react-native'
import SearchResultsList from 'src/screens/search/SearchResultsList';
import SearchResultsTitle from './SearchResultsTitle';

const SearchResults = () => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1, marginTop: 15 }}>
            <SearchResultsTitle title="Results" />
            <SearchResultsList />
        </View>
    );
}

export default SearchResults;