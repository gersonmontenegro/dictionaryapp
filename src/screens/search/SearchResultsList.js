import React from 'react';
import { FlatList, View, Text } from 'react-native';

const SearchResultsList = () => {
    return (
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
    );
}

export default SearchResultsList;