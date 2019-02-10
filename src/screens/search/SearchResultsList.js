import React, { PureComponent } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';

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
                        <View style={{ height: 40, justifyContent: 'center', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Prata-Regular', marginLeft: 5, color: 'black' }}>{item.word}</Text>
                                <Text style={{ fontFamily: 'Prata-Regular', marginLeft: 5, color: 'gray' }}>{item.lexicalCategory}</Text>
                            </View>
                        </View>
                    );
                }
                }
            />
        );
    }
}

const mapStateToProps = (state) => {
    const { results } = state;
    return { results };
}

export default connect(mapStateToProps)(SearchResultsList);