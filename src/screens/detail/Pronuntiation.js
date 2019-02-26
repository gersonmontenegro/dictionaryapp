import React from 'react';
import { View, Text } from 'react-native';

const Pronuntiation = ({ pron, word }) => {
    console.debug("word is coming...", word);
    return (
        <View style={{ marginTop: 10, marginLeft: 5 }}>
            <Text style={{ fontFamily: 'Prata-Regular', fontWeight: 'bold', color: 'black' }}>Pronuntiation ({word})</Text>
            <View>
                {
                    getWord(pron)
                }
            </View>
            {/* <Text style={{ fontFamily: 'Prata-Regular', fontWeight: 'bold', color: 'black' }}>---{getWord(pron)}-</Text> */}
        </View>
    );
}

getWord = (value) => {
    return value.map((item, index) => {
        return (
            <View key={index}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontFamily: 'Prata-Regular', fontStyle: 'italic' }}>
                        Notation:
                    </Text>
                    <Text style={{ fontFamily: 'Prata-Regular', fontWeight: 'bold', color: 'green', marginLeft: 10 }}>
                        {item.phoneticNotation}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontFamily: 'Prata-Regular', fontStyle: 'italic', marginLeft: 10 }}>>
                        Spelling
                    </Text>
                    <Text style={{ fontFamily: 'Prata-Regular', fontWeight: 'bold', color: 'red', marginLeft: 10 }}>
                        {item.phoneticSpelling}
                    </Text>
                </View>
            </View>
        );
    });
}

export default Pronuntiation;