import TrackPlayer from 'react-native-track-player';

        this.onTrackChange = null;

    componentDidMount() {
        this.onTrackChange = TrackPlayer.addEventListener('playback-track-changed', async (data) => {
        });
    }

    componentWillUnmount() {
        this.onTrackChange.remove();
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={onClickAudio}>
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
