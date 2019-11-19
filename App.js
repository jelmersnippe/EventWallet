import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import NFCWristbandApp from './src/NFCWristbandApp'

export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
        <NFCWristbandApp />
      // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
// });

