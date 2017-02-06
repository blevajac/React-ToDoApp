var React = require('react');
var uuid = require('node-uuid');    //UUID - Univezalni unikatni idetifikator


//komponente
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function(){      //vraća default stanje applikacije
    return{
          showCompleted: false,
          searcText: '',
          todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function(){   //pokreće se kada se props ili state komponente izmjeni
      TodoAPI.setTodos(this.state.todos);
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
