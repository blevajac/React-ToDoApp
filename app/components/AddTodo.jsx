var React = require('react');

var AddTodo = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();

        var todoText = this.refs.todoText.value;  //dohvaća vrijednost u inputu pomoću refs
        if (todoText.length > 0) {
            this.refs.todoText.value = ''; //isprazni input
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todoText.focus();     //ako nema valjane vrijednosti na stisku gumba automatski vraća cursor na input
        }

    },
    render: function(){
      return(
          <div>
              <form ref="form" onSubmit={this.handleSubmit} className="todo-form">
                  <input type="text" ref="todoText" placeholder="Unesite novi zadataka za napraviti"/>
                  <button className="button expanded">Spremi zadatak</button>
              </form>
          </div>
      );
    }
});


module.exports = AddTodo;
