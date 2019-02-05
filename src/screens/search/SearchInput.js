import React, { PureComponent } from 'react';
import { View, TextInput } from 'react-native';
import { searchStyles } from 'src/screens/search/Search.styles';
import SearchWord from 'src/providers/';
import { SearchBar } from 'react-native-elements';

class SearchInput extends PureComponent {
    constructor(props) {
        super(props);
        let s = new SearchWord();
        s.initSearch('forever');
        this.state = { 'searchWord': '' };
    }

    updateSearch = search => {
        this.setState({ 'searchWord': search });
    }

    render() {
        return (
            <View style={searchStyles.inputContainer}>
                <SearchBar
                    placeholder="Search......"
                    inputStyle={{ fontFamily: 'Prata-Regular', fontSize: 15 }}
                    value={this.state.searchWord}
                    onChangeText={this.updateSearch}
                    containerStyle={{ backgroundColor: 'white' }}
                />
            </View>
        );
    }
}
export default SearchInput;