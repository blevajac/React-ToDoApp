//Todo - zna kako renderirati jedan element liste
//Renderira ga TodoLista komponent, ona će renderirati multipl todos koji je primila TodoLista

var React = require('react');

var Todo = React.createClass({
      render: function(){
          var {text, id} = this.props;
          return(
              <div>
                  {id}. {text}
              </div>
          )
      }
});

module.exports = Todo;
