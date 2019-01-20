import React, { PureComponent } from 'react';
import { View } from 'react-native';
import SplashScreen from 'src/screens/splash';
import { Styles } from './assets/style/Styles';

export default class App extends PureComponent {
  render() {
    return (
      <View style={Styles.MainContainer}>
        <SplashScreen />
      </View>
    );
  }
}
