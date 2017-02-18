export var setSeatchTest = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT'
        searchText
    };
};

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export var addTodo = (text) => {
    return {
        typr: 'ADD_TODO',
        text
    }
};

export var toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};
