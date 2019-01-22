import React from 'react';
import { View, Text } from 'react-native'
import SearchResultsList from 'src/screens/search/SearchResultsList';

const SearchResults = () => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1, marginTop: 15 }}>
            <View style={{ height: 30, backgroundColor: 'gray', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'Prata-Regular', marginLeft: 5 }}>Results</Text>
            </View>
            <SearchResultsList />
        </View>
    );
}

export default SearchResults;