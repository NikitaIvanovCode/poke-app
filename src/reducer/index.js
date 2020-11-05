const initialState = {
    data: [],
    listNameData: [],
    paginationCount: null,
    selectedPokemon: {},
    currentPage: 1
}

const sortPokemonNames = data => {
    const sortedData = data.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        }
    })
    return sortedData
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA_FROM_API':
            return {
                ...state,
                data: [...state.data, action.payload],
                currentPage: action.page
            }
        case 'GET_PAGINATION_COUNT':
            return {
                ...state,
                paginationCount: action.payload
            }
        case 'CLEAR_DATA':
            return {
                ...state,
                data: []
            }
        case 'GET_NAME_LIST_FROM_API':
            return {
                ...state,
                listNameData: sortPokemonNames(action.payload)
            }
        case 'GET_SELECTED_POKEMON':
            return {
                ...state,
                selectedPokemon: action.payload
            }
        case 'CLEAR_SELECTED_BOOK':
            return {
                ...state,
                selectedPokemon: {}
            }
        default:
            return state
    }
}

export default reducer;