const initState = {
    allCategories: [
        { name: 'Ollivanders', displayName: 'Ollivanders' },
        { name: 'Flourish and Blotts', displayName: 'Flourish and Blotts' },
        { name: 'Quality Quidditch Supplies', displayName: 'Quality Quidditch Supplies' }
    ],
    currentCategory: 'Ollivanders',
};

const reducer = (state = initState, action) => {
    console.log('categories reducer called');
    let newState = { ...state };

    switch (action.type) {
        case 'CONSOLE_LOG':
            console.log('categories');
            break;
        case 'CHANGE_CATEGORY':
            newState.currentCategory = action.payload;
            break;
        case 'ADD_CATEGORY':
            newState.allCategories.push(action.payload);
            break;
        default:
            break;
    }

    return newState;
};

export default reducer;