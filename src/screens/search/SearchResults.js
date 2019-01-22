import React from 'react';
import { View, Text, FlatList } from 'react-native'

const SearchResults = () => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1, marginTop: 15 }}>
            <View style={{ height: 30, backgroundColor: 'gray', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'Prata-Regular', marginLeft: 5 }}>Results</Text>
            </View>
            <FlatList
                data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }]}
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
        </View>
    );
}

export default SearchResults;