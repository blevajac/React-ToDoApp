var React = require('react');
var uuid = require('node-uuid');    //UUID - Univezalni unikatni idetifikator


//komponente
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function(){      //vraća default stanje applikacije
    return{
          showCompleted: false,
          searcText: '',
          todos: [
            {
                id: uuid(),
                text: 'Prošeći zeca'
            }, {
                id: uuid(),
                text: 'Posaugaj kuću'
            }, {
                id: uuid(),
                text: 'Odi do dućana'
            }, {
                id: uuid(),
                text: 'Nazovi svoje'
            }, {
                id: uuid(),
                text: 'Jasmina zamolba'
            }

          ]
    };
  },
  handleAddTodo: function (text){   //javlja kada se unese novi todo
      this.setState({
          todos: [
              ...this.state.todos,
              {
                id: uuid(),      //id polje mora biti unikatno
                text: text
              }
          ]
      });
  },
  handleSearch: function(showCompleted, searcText){
      this.setState({
        showCompleted: showCompleted,
        searcText: searcText.toLowerCase()
      })
  },
  render: function () {
    var {todos} = this.state;   //dohvaća state todos

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos}/> {/*renderira TodoList komponentu */}
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
