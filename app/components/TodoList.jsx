//TodoLista - Zna kako rendxerirati listu todo koji su prosljeđeni kao props
//TodoApp - prosljeđuje listu u TodoList
var React = require('react');
//komponente
var Todo = require('Todo');

var TodoList = React.createClass({
      render: function(){
          var {todos} = this.props;     //prosljeđuje listu todos iz TodoApp
          //renderTodos - dobiva listu ali nezna kako iterira kroz listu zato se radi posbna render funkcija
          var renderTodos = () => {     //ne prima argumente
              return todos.map((todo) => {  //todos iz TodoApp
              //iterira kroz polje i vraća polje jsx (vraća vrijednost), za svako todo polje vraća novo jsx koji će biti prikazan na ekranu                    //.map - uzima funkciju i zove ju za svaki element u polju i sve što vrati se zamjeni (1,2,3 a u .map imam +1 postane 2,3,4)
                    return (
                            <Todo key={todo.id} {...todo}/> //key prop koristi react da pazi na razlićite elemente
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

module.exports = TodoList;
