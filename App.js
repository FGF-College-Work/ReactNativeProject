import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import AssetExample from './components/AssetExample';
import NewAsset from './components/NewAsset';

import { Card } from "react-native-elements";
import Counter from './components/Counter';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Brasileirão 2019
        </Text>
        <Card title="Ceará">
          <AssetExample />  
          <Counter />
        </Card>   
        <Card title="Fortaleza">
          <NewAsset /> 
          <Counter />
        </Card>   
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
