import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { Styles } from './assets/style/Styles';
import MainNavigator from 'src/navigation';
import store from 'src/store';

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <View style={Styles.MainContainer}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
