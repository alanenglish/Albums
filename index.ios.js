// Place code here for iOS
// Import a library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (
  <Text>Show Albums</Text>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
