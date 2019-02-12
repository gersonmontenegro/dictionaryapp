import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import SearchResultsItem from 'src/screens/search/SearchResultsItem';

class SearchResultsList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { refresh: false };
    }

    _keyExtractor = item => item.key.toString();

    componentWillReceiveProps = (data) => {
        this.setState({ refresh: !this.state.refresh });
    }

    render() {
        return (
            <FlatList
                data={this.props.results.words}
                extraData={this.state.refresh}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => {
                    return (
                        <SearchResultsItem {...item} />
                    );
                }
                }
            />
        );
    }
}

const mapStateToProps = state => {
    const { results } = state;
    return { results };
}

export default connect(mapStateToProps)(SearchResultsList);