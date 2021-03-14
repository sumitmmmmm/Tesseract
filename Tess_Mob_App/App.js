import React from 'react';
import { AppRegistry } from 'react-native';
import Routes from './routes'
// import Font from 'expo'


export default class App extends React.Component {
   

  render() {
      return (
        <Routes>
        
        </Routes>
      )
  }
}

AppRegistry.registerComponent('App', () => App)