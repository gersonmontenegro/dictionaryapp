import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { searchStyles } from 'src/screens/search/Search.styles';

const GenericHeader = ({ title, left, onPressLeft }) => {
    return (
        <View style={searchStyles.headerContainer}>
            <View style={{ flex: 1 }}>
                {
                    leftButton(left, onPressLeft)
                }
            </View>
            <View style={{ flex: 5, alignItems: 'center' }}>
                <Text style={searchStyles.textHeader}>{title}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
            </View>
        </View>
    );
}

leftButton = (left, onPressLeft) => {
    if (left) {
        return (
            <TouchableHighlight onPress={onPressLeft}>
                <Image style={{ height: 30, width: 30 }} source={require('assets/img/lett_arrow.png')} />
            </TouchableHighlight>
        );
    }
};

export default GenericHeader;