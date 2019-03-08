import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { searchStyles } from 'src/screens/search/Search.styles';

const GenericHeader = ({ title, left, onPressLeft }) => {
    return (
        <View style={searchStyles.headerContainer}>
            <View style={{ flex: 1 }}>
                <TouchableHighlight>
                    <Image style={{ height: 30, width: 30 }} source={require('assets/img/lett_arrow.png')} />
                </TouchableHighlight>
            </View>
            <View style={{ flex: 5, alignSelf: 'center' }}>
                <Text style={searchStyles.textHeader}>{title}</Text>
            </View>
            <View style={{ flex: 1 }}>

            </View>
        </View>
    );
}

export default GenericHeader;