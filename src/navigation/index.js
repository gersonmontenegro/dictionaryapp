import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SplashScreen from 'src/screens/splash';

const routeNavigator = {
    Splash: {
        screen: SplashScreen
    }
};

const configNavigator = {
    transitionConfig: () => {
        transitionSpec: {
            duration: 150
        }
    }
}

export default MainNavigator = createStackNavigator(routeNavigator, configNavigator);