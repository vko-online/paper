/**
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './app/index';

export default class paper extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('paper', () => paper);
