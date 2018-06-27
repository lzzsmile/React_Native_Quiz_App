import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './components/router';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    const ConnectedRouter = connect()(Router);
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' backgroundColor="black"/>
        <Provider store={store}>
          <ConnectedRouter />
        </Provider>
      </View>
    );
  }
}

export default App;
