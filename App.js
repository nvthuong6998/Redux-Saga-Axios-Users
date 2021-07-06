import React from 'react'
import { View, Text } from 'react-native'
import User from './src/User/User'
import UserContainer from './src/User/User.container'

// REDUX
import { Provider } from 'react-redux'
import rootReducer from './src/rootReducer'
import { createStore, applyMiddleware } from 'redux'

// SAGA
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './src/rootSaga'
import userSaga from './src/User/User.saga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const App = () => {
  return (
    <Provider store={store}> 
      <UserContainer />
    </Provider>
  )
}

sagaMiddleware.run(rootSaga);

export default App
