import React from 'react';
import { View } from 'react-native';
import LogoComponent from './LogoApp';
import { SplashStyle } from './Splash.styles';
import { withNavigation } from 'react-navigation';

const SplashScreen = ({ navigation }) => {
    return (
        <View style={SplashStyle.SplashContainer}>
            <LogoComponent />
            {
                jumtoToSearch(navigation)
            }
        </View>
    );
}

jumtoToSearch = (navigation) => {
    setTimeout(() => {
        navigation.navigate('Search');
    }, 2000);
}

export default withNavigation(SplashScreen);