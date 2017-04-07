//kada se koristi Webpack svaki file se ponaša indipendno te ga je potrebno importirati explicitno
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from 'Login';
import TodoApp from 'TodoApp';

/* //localStorage code
store.subscribe(() => {
    var state = store.getState();
    console.log('New state', state);
    TodoAPI.setTodos(state.todos);
});

//dispatch akcija koja inicijalizira aplikaciju sa postojećim podacima u localStorage
var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));
*/

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
      <Router history={hashHistory}>
          <Route path="/">
              <Route path="todos" component={TodoApp} />
              <IndexRoute component={Login} />
          </Route>
      </Router>
  </Provider>,
  document.getElementById('app')
);
