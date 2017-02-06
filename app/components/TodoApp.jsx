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
                text: 'Prošeći zeca',
                completed: false
            }, {
                id: uuid(),
                text: 'Posaugaj kuću',
                completed: true
            }, {
                id: uuid(),
                text: 'Odi do dućana',
                completed: true
            }, {
                id: uuid(),
                text: 'Nazovi svoje',
                completed: false
            }, {
                id: uuid(),
                text: 'Jasmina zamolba',
                completed: false
            }

          ]
    };
  },
  handleToggle: function(id){
      //pronalazi item iz todo polja i mijenja njen status
      var updateTodos = this.state.todos.map((todo) => {  //map updata sva polja u polju
          if(todo.id === id){
            todo.completed = !todo.completed; //ako 'TRUE' postane 'FALSE'
          }
          return todo;
      });

      this.setState({todos: updateTodos});
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
        <TodoList todos={todos} onToggle={this.handleToggle}/> {/*renderira TodoList komponentu */}
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
