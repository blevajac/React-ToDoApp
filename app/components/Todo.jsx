//Todo - zna kako renderirati jedan element liste
//Renderira ga TodoLista komponent, ona će renderirati multipl todos koji je primila TodoLista
var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
      render: function(){
          var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
          var todoClassName = completed ? 'todo todo-completed' : 'todo';   //dodaje still zavisno dali je todo gotov ili ne

          var renderDate = () => {
              var message = 'Izrađeno: ';
              var timestamp = createdAt;

              if(completed) {
                message = 'Završeno: ';
                timestamp = completedAt;
              }

              return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
          };

          return(
              <div className={todoClassName} onClick = {() => {           //click handler
                      //this.props.onToggle(id);  //kada se stisne checkbox ili text on se bude pokrenuo
                      dispatch(actions.toggleTodo(id));
              }}>
                  <div>
                      <input type="checkbox" checked={completed} />
                  </div>
                  <div>
                      <p>{text}</p>
                      <p className="todo__subtext">{renderDate()}</p>
                  </div>
              </div>
          )
      }
});

//za testiranje
export default connect(
    //Todo netreba podatke, oni dolaze iz TodoList, on treba povez sa dispatch za akcije od Redux
)(Todo);
