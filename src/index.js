const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore } = require('redux')
const reducer = require('./reducer')
const request = require('superagent')


const state = {
  cards: {},
  cardRevealed: null,
  highScores: {}
}


//Components
const App = require('../src/components/App')
<<<<<<< HEAD

const initialState = {
  cards: {},
  cardRevealed: null,
  highScores: {
    1: {
      id: 4,
      Name: 'Donny',
      Score: 12
    },
    2: {
      id: 1,
      Name: 'Leo',
      Score: 56
    },
    3: {
      id: 3,
      Name: 'Mike',
      Score: 142
    },
    4: {
      id: 2,
      Name: 'Raphyl',
      Score: 24
    }
  }
}

const store = createStore(reducer, initialState)
=======
const store = createStore(reducer, state)

>>>>>>> 6c6917db4b771defb8fb270e6ab04eb2514cdd07

document.addEventListener('DOMContentLoaded', (e) => {

store.dispatch({type: 'RANDOMISE_CARDS'})
console.log(store.getState(), 'here is the state');
  store.subscribe(() => {
    const state = store.getState()
    render(state)
  })

  function render (state) {
    console.log(state);
    const root = document.querySelector('#app')
    ReactDOM.render(
      <App state={state} store={store}/>,
      root
    )
  }

  request('/api/v1/highscores', (err, res) => {
    store.dispatch({type: 'UPDATE_HIGHSCORES', payload: res.body})

  })
  render(store.getState())
})
