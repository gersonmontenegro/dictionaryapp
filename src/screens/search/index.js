import React, { PureComponent } from 'react';
import { FlatList, View, Text, TextInput } from 'react-native';

class SearchScreen extends PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 40, backgroundColor: 'lighgray', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Prata-Regular' }}>Search</Text>
                </View>
                <View style={{ height: 38, backgroundColor: 'lighgray', marginTop: 2 }}>
                    <TextInput style={{ height: 50, backgroundColor: 'white', fontFamily: 'Prata-Regular', borderColor: 'black', borderWidth: 1 }} placeholder="Search..." />
                </View>
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
            </View>
        );
    }

}

export default SearchScreen;