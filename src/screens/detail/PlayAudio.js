import React from 'react';
import { View, Text } from 'react-native';

let file = "";

const PlayAudio = ({ audioFile }) => {
    file = audioFile;
    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={onClickAudio}>
                <Image style={{ width: 24, height: 24 }} source={audioIcon} />
            </TouchableOpacity>
        </View>
    );
}

onClickAudio = () => {
    console.debug(">audio!");
}

export default PlayAudio;
