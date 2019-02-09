import React, { PureComponent } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';

class SearchResultsList extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]}
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 40, justifyContent: 'center', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Prata-Regular', marginLeft: 5, color: 'black' }}>forever</Text>
                                <Text style={{ fontFamily: 'Prata-Regular', marginLeft: 5, color: 'gray' }}>adverb</Text>
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