import React, { PureComponent } from 'react';
import { View, ToastAndroid } from 'react-native';
import { searchStyles } from 'src/screens/search/Search.styles';
import SearchWord from 'src/providers/';
import { SearchBar } from 'react-native-elements';
import SearchButton from 'src/screens/search/SearchButton';

class SearchInput extends PureComponent {
    constructor(props) {
        super(props);
        this.search = new SearchWord();
        this.state = {
            searchWord: '',
            showLoading: false
        };
    }

    updateSearch = search => {
        this.setState({ 'searchWord': search });
    }

    addSearchButton = () => <SearchButton onSearchButtonClick={this.onSearchButtonClick} />

    onSearchButtonClick = async () => {
        let result = '';
        if (this.state.searchWord.length) {
            result = await this.search.initSearchAsync(this.state.searchWord);
            if (result) {
                console.log("good!");
            } else {
                this.showToast(`No results for "${this.state.searchWord}"`);
            }
        }
    }

    showToast = (message) => {
        ToastAndroid.showWithGravity(message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50);
    }

    render() {
        return (
            <View style={[searchStyles.inputContainer]}>
                <SearchBar
                    placeholder="Search......"
                    inputStyle={searchStyles.inputStyle}
                    value={this.state.searchWord}
                    onChangeText={this.updateSearch}
                    containerStyle={{ backgroundColor: 'white' }}
                    showLoading={this.state.showLoading}
                    searchIcon={this.addSearchButton}
                />
            </View >
        );
    }
}
export default SearchInput;