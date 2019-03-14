import React, { PureComponent } from 'react';
import { View, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { searchStyles } from 'src/screens/search/Search.styles';
import SearchWord from 'src/providers/';
import { SearchBar } from 'react-native-elements';
import SearchButton from 'src/screens/search/SearchButton';
import { bindActionCreators } from 'redux';
import { addWords, viewPopover } from 'src/actions';
import PopOverComponent from 'src/components/PopOverComponent';

class SearchInput extends PureComponent {
    constructor(props) {
        super(props);
        this.search = new SearchWord();
        this.state = {
            searchWord: '',
            showLoading: false,
            results: []
        };
    }

    updateSearch = search => {
        this.setState({ 'searchWord': search });
    }

    addSearchButton = () => <SearchButton onSearchButtonClick={this.onSearchButtonClick} />

    onSearchButtonClick = async () => {
        let result = '';
        if (this.state.searchWord.length) {
            this.props.viewPopover(true);
            result = await this.search.initSearchAsync(this.state.searchWord);
            setTimeout(() => {
                this.props.viewPopover(false);
                console.debug("false!!!");
            }, 300);
            if (result) {
                this.props.addWords(result.results[0]);
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
                    onSubmitEditing={this.onSearchButtonClick}
                />
                <PopOverComponent showPopOver={this.props.showPopOver} />
            </View >
        );
    }
}

const maptStateToProps = (state) => {
    const { results } = state;
    return { results };
}

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            addWords,
            viewPopover
        },
        dispatch
    )
);

export default connect(maptStateToProps, mapDispatchToProps)(SearchInput);