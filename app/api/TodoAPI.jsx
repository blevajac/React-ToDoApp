//TodoAPI.jsx - zna koako dohvaćati i spremati filove iz localStorage
var $ = require('jquery');

module.exports = {
    setTodos: function(todos){   //postavlja Todos u localStorage. Poziva se kada se postavlja novi ili togla novi todo
        if($.isArray(todos)){    //provjerava dali je polje []
            localStorage.setItem('todos', JSON.stringify(todos));   //JSON.stringify - metoda uzima array i pretvara u string
            return todos;
        }
    },
    getTodos: function(){         //dohvaća Todos iz localStorage. Poziva se kada se pokrene aplikacija
        //dohvaća, provjerava dali je array i prikazuje elemente sa vrijednostima
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try{
          todos = JSON.parse(stringTodos);  //JSON.parse - pretvara string u objekt ili array iz kojeg je nastalo
                                           //JSON.parse - može neuspjeti ako su podaci nepravilni
        } catch(e){

        }

        return $.isArray(todos) ? todos : [];   //pojednostavljena verzija if else statmenta dole
        /*
            if($.isArray(todos)){
              return todos;
            }else {
              return[];
            }
        */
    },
    filterTodos: function(todos, showCompleted, searchText){
      var filteredTodos = todos;

      //filtrira na showCompleted
      filteredTodos = filteredTodos.filter((todo) => {
          return !todo.completed || showCompleted;
      });
      //filtrira na searchText
      filteredTodos = filteredTodos.filter((todo) => {
          var text = todo.text.toLowerCase();
          return searchText.length === 0 || text.indexOf(searchText) > -1;
      });
      //sortirat  todo sa ne napravljenim todo prvim
      filteredTodos.sort((a, b) => {
          if (!a.completed && b.completed) {
              return -1;
          } else if (a.completed && !b.completed) {
              return 1;
          } else {
              return 0;
          }
      });

      return filteredTodos;
    }
};


//local storage nemože spremati metode ili objekte
