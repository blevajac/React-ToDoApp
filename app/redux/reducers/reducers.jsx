export var searchTest = (state = '', action) => {
      switch(action.type){
          case 'SET_SEARCH_TEST':
              return action.searchTest;
          default:
              return state;
      };
};

export var showCompletedReducer = (state = false, action) => {
    switch (action.type) {
      case 'TOGGLE_SHOW_COMPLETED':
          return !state;
      default:
          return state;
    }
};
