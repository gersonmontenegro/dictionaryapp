import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import audioIcon from 'assets/img';
import TrackPlayer from 'react-native-track-player';

class PlayAudio extends PureComponent {
    constructor(props) {
        super(props);
        this.file = props.audioFile;
        this.onTrackChange = null;
    }

    componentDidMount() {
        TrackPlayer.registerPlaybackService(() => require('./services.js'));
        this.onTrackChange = TrackPlayer.addEventListener('playback-track-changed', async (data) => {
        });
    }

    componentWillUnmount() {
        this.onTrackChange.remove();
    }

    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={this.onClickAudio}>
                    <Image style={{ width: 24, height: 24 }} source={audioIcon} />
                </TouchableOpacity>
            </View>
        );
    }

    onClickAudio = () => {
        TrackPlayer.setupPlayer().then(this.onPlayerReady);
    }

    onPlayerReady = () => {
        let track = {
            id: '1',
            url: this.file,
            title: 'Word',
            artist: 'Oxford dictionary',
            album: '',
            genre: '',
            date: '2014-05-20T07:00:00+00:00',
            artwork: '',
        };
        TrackPlayer.add([track]).then(() => {

        });
        TrackPlayer.play();
    }

}


export default PlayAudio;
