import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SplashScreen from 'src/screens/splash';
import SearchScreen from 'src/screens/search';

const routeNavigator = {
    Splash: {
        screen: SplashScreen
    },
    Search: {
        screen: SearchScreen
    }
};

const configNavigator = {
    initialRouteName: 'Search',
    headerMode: 'none',
    transitionConfig: () => {
        transitionSpec: {
            duration: 150
        }
    }
}

export default MainNavigator = createStackNavigator(routeNavigator, configNavigator);