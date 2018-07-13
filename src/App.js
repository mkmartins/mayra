import React, { Component } from 'react'
//Redux Setup to manage app state/data
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducer'
import ReduxThunk from 'redux-thunk' //for middleware
import firebase from 'firebase' //Setupfirebase as app backend
import { Container } from 'native-base' //Using native-base as ui-kit
import RoutesComponent from './Routes'
import { View } from 'react-native'

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCt3NOBE6snzh_trIB2J_cd4BdziV2m7fM",
      authDomain: "mayra-43678.firebaseapp.com",
      databaseURL: "https://mayra-43678.firebaseio.com",
      projectId: "mayra-43678",
      storageBucket: "mayra-43678.appspot.com",
      messagingSenderId: "571128881847"
    }
    firebase.initializeApp(config)
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return(
      <Container>
        <Provider store={store}>
          <RoutesComponent />
        </Provider>
      </Container>
    )
  }
}

export default App