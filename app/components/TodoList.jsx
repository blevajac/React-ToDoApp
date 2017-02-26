//TodoLista - Zna kako rendxerirati listu todo koji su prosljeđeni kao props
//TodoApp - prosljeđuje listu u TodoList
var React = require('react');
var {connect} = require('react-redux');

//komponente
//var Todo = require('Todo');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
      render: function(){
          var {todos, showCompleted, searchText} = this.props;     //prosljeđuje listu todos iz TodoApp
          //renderTodos - dobiva listu ali nezna kako iterira kroz listu zato se radi posbna render funkcija
          var renderTodos = () => {     //ne prima argumente
              if(todos.length === 0){
                  return (
                    <p className="container__message">Nema se ništa za raditi! :(</p>
                  );
              }
              return TodoAPI.filterTodos(todos,showCompleted,searchText).map((todo) => {  //todos iz TodoApp
              //iterira kroz polje i vraća polje jsx (vraća vrijednost), za svako todo polje vraća novo jsx koji će biti prikazan na ekranu                    //.map - uzima funkciju i zove ju za svaki element u polju i sve što vrati se zamjeni (1,2,3 a u .map imam +1 postane 2,3,4)
                    return (
                            <Todo key={todo.id} {...todo} /> //key prop koristi react da pazi na razlićite elemente
                        );
                    });
          };

          return(
                <div>
                    {renderTodos()}
                </div>
          )
      }
});

export default connect(
    (state) => {
        return state;
    }
)(TodoList);
