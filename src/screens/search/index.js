import React from 'react';
import { View } from 'react-native';
import { searchStyles } from './Search.styles';
import GenericHeader from 'src/components/GenericHeader';
import SearchInput from 'src/screens/search/SearchInput';
import SearchResults from 'src/screens/search/SearchResults';

const SearchScreen = () => {
    return (
        <View style={searchStyles.mainContainer}>
            <GenericHeader title="Search" />
            <SearchInput />
            <SearchResults />
        </View>
    );
}

export default SearchScreen;