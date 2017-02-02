//kada se koristi Webpack svaki file se ponaša indipendno te ga je potrebno importirati explicitno
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//componente


$(document).foundation();

//App css
require('style!css!sass!aplicationStyles')

ReactDOM.render(
    <p>Boilerplate03 Projekt</p>,
    document.getElementById('app')
);
