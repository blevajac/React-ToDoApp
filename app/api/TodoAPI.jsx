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
    }
};


//local storage nemože spremati metode ili objekte
