import React from 'react';
import * as Redux from 'react-redux';

//komponente
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

export var TodoApp = React.createClass({
  /*getInitialState više nije potreban jer Redux sada održava store
          getInitialState: function(){      //vraća default stanje applikacije
            return{
                  showCompleted: false,
                  searchText: '',
                  todos: TodoAPI.getTodos()
            };
          },
  */
  /*componentDidUpdate sada to radi redux
          componentDidUpdate: function(){   //pokreće se kada se props ili state komponente izmjeni
              TodoAPI.setTodos(this.state.todos);
          },
  */
  /*handleAddTodo postali akcije i reduceri
  handleAddTodo: function (text){   //javlja kada se unese novi todo //text je u ovomslućaju input type iz AddTodo.jsx input filda u formi
      this.setState({
          todos: [
              ...this.state.todos,
              {
                id: uuid(),      //id polje mora biti unikatno
                text: text,
                completed: false,
                createdAt: moment().unix(),
                completedAt: undefined
              }
          ]
      });
  },
  handleSearch: function(showCompleted, searchText){
      this.setState({
        showCompleted: showCompleted,
        searchText: searchText.toLowerCase()
      })
  },
  */
  onLogout(e){
      var {dispatch} = this.props;
      e.preventDefault();

      dispatch(actions.startLogout());
  },
  render: function () {
    //var {todos, showCompleted, searchText} = this.state;   //dohvaća state todos
    //var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
          <div className="page-actions">
              <a href="#" onClick={onLogout}>Logout</a>
          </div>

          <h1 className="page-title">Todo App</h1>

          <div className="row">
              <div className="column small-centered small-11 medium-6 large-5">
                  <div className="container">
                    <TodoSearch /> {/* onSearch={this.handleSearch}   */}
                    <TodoList   /> {/* renderira TodoList komponentu  */}
                    <AddTodo    /> {/* onAddTodo={this.handleAddTodo} */}
                  </div>
              </div>
          </div>
      </div>
    );
  }
});

export default Redux.connect()(TodoApp);
