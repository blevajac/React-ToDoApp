var React = require('react');
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
  handleAddTodo: function (text){   //javlja kada se unese novi todo
      alert('new todo: ' + text);

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
