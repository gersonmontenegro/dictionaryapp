import React from 'react';
import { View, Text } from 'react-native';
import { searchStyles } from 'src/screens/search/Search.styles';
import { connect } from 'react-redux';

const SearchResultsTitle = ({ title, results }) => {
    return (
        <View style={searchStyles.searchResultsTitleContainer}>
            <Text style={searchStyles.searchResultsTitle}>{title} {printResultsQuantity(results.words)}</Text>
        </View>
    );
}

printResultsQuantity = (data) => {
    return data.length ? data.length : '';
}

const mapStateToProps = (state) => {
    const { results } = state;
    return { results };
}

export default connect(mapStateToProps)(SearchResultsTitle);