import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class SearchScreen extends PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 40, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Search</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'lighgray' }}>

                </View>
            </View>
        );
    }

}

export default SearchScreen;