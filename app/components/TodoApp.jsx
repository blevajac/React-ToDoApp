var React = require('react');
//komponente
var TodoList = require('TodoList');


var TodoApp = React.createClass({
  getInitialState: function(){      //vraća default stanje applikacije
    return{
          todos: [
            {
                id: 1,
                text: 'Prošeći zeca'
            }, {
                id: 2,
                text: 'Posaugaj kuću'
            }, {
                id: 3,
                text: 'Odi do dućana'
            }, {
                id: 4,
                text: 'Nazovi svoje'
            }, {
                id: 5,
                text: 'Jasmina zamolba'
            }

          ]
    };
  },
  render: function () {
    var {todos} = this.state;   //dohvaća state todos

    return (
      <div>
        <TodoList todos={todos}/> {/*renderira TodoList komponentu */}
      </div>
    );
  }
});

module.exports = TodoApp;
