//Todo - zna kako renderirati jedan element liste
//Renderira ga TodoLista komponent, ona će renderirati multipl todos koji je primila TodoLista

var React = require('react');

var Todo = React.createClass({
      render: function(){
          var {text, id, completed} = this.props;
          return(
              <div onClick = {() => {           //click handler
                      this.props.onToggle(id);  //kada se stisne checkbox ili text on se bude pokrenuo
              }}>
                  <input type="checkbox" checked={completed} />
                  {text}
              </div>
          )
      }
});

module.exports = Todo;
