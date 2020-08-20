/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';


import Navigator from './routes/homeStack';

const App: () => React$Node = () => {
    return (
      <Navigator />
    );
};

export default App;
