//Todo - zna kako renderirati jedan element liste
//Renderira ga TodoLista komponent, ona će renderirati multipl todos koji je primila TodoLista
var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
      render: function(){
          var {text, id, completed, createdAt, completedAt} = this.props;
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
              <div onClick = {() => {           //click handler
                      this.props.onToggle(id);  //kada se stisne checkbox ili text on se bude pokrenuo
              }}>
                  <input type="checkbox" checked={completed} />
                  <p>{text}</p>
                  <p>{renderDate()}</p>
              </div>
          )
      }
});

module.exports = Todo;
