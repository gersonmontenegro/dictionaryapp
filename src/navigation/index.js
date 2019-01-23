import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SplashScreen from 'src/screens/splash';
import SearchScreen from 'src/screens/search';
import DetailScreen from 'src/screens/detail';

const routeNavigator = {
    Splash: {
        screen: SplashScreen
    },
    Search: {
        screen: SearchScreen
    },
    Detail: {
        screen: DetailScreen
    }
};

const configNavigator = {
    initialRouteName: 'Detail',
    headerMode: 'none',
    transitionConfig: () => {
        transitionSpec: {
            duration: 150
        }
    }
}

export default MainNavigator = createStackNavigator(routeNavigator, configNavigator);