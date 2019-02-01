import React, { PureComponent } from 'react';
import { View, TextInput } from 'react-native';
import { searchStyles } from './Search.styles';
import SearchWord from 'src/providers/';

class SearchInput extends PureComponent {
    constructor(props) {
        super(props);
        let s = new SearchWord();
        s.initSearch('forever');
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