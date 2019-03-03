import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PronunciationItem from './PronunciationItem';
import audioIcon from 'assets/img';
import PlayAudio from './PlayAudio';

const Pronuntiation = ({ pron, word }) => {
    console.debug("word is coming...", word);
    return (
        <View style={{ marginTop: 10, marginLeft: 5 }}>
            <Text style={{ fontFamily: 'Prata-Regular', fontWeight: 'bold', color: 'black' }}>Pronunciation ({word})</Text>
            <View>
                {
                    getWord(pron)
                }
            </View>
        </View>
    );
}

getWord = (value) => {
    return value.map((item, index) => {
        return (
            <View key={index}>
                <View>
                    <PronunciationItem title='Notation: ' color='green' value={item.phoneticNotation} />
                    <PronunciationItem title=' >Spelling: ' color='red' value={item.phoneticSpelling} />
                    {
                        addAudioComponent(item)
                    }
                </View>
            </View>
        );
    });
}

addAudioComponent = ({ audioFile }) => {
    if (audioFile) {
        return <PlayAudio audioFile={audioFile} />
    }
}

export default Pronuntiation;