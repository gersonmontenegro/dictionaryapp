import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

const SearchButton = ({ onSearchButtonClick }) => {
    return (
        <TouchableHighlight onPress={onSearchButtonClick}>
            <Icon name='search' color='white' />
        </TouchableHighlight>
    )
}

export default SearchButton;