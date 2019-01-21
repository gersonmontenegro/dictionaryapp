import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { SplashScreen } from 'src/screens/splash';
import { Styles } from './assets/style/Styles';
import MainNavigator from 'src/navigation';

export default class App extends PureComponent {
  render() {
    return (
      <View style={Styles.MainContainer}>
        <MainNavigator />
      </View>
    );
  }
}
