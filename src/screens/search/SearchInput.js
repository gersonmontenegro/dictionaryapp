import React, { PureComponent } from 'react';
import { View, TextInput } from 'react-native';
import { searchStyles } from './Search.styles';

class SearchInput extends PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={searchStyles.inputContainer}>
                <TextInput style={searchStyles.inputStyle} placeholder="Search..." />
            </View>
        );
    }
}
export default SearchInput;