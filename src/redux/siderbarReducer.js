let initialState = {
        sidebar: [
        {id: 1, name: 'Dymich'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        ]
};

const sidebarReducer = (state = initialState, action) => {
    
    let copyState = {...state}
    
    return copyState;
}
export default sidebarReducer;