import React from 'react';
import { View } from 'react-native';
import LogoComponent from './LogoApp';
import { SplashStyle } from './Splash.styles';

const SplashScreen = () => {
    return (
        <View style={SplashStyle.SplashContainer}>
            <LogoComponent />
        </View>
    );
}

export default SplashScreen;