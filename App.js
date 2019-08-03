import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import FaceDetectCamera from './components/FaceDetectCamera';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FaceDetectCamera />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
