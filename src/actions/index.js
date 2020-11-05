export const getDataFromApi = (num = 1) => {
    return dispatch => {
        dispatch({ type: 'CLEAR_DATA' })
        for (let i = 55 * num - 54; i <= 55 * num; i++) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    } else {
                        return res = '404'
                    }
                })
                .then(res => {
                    dispatch({ type: 'GET_DATA_FROM_API', payload: res, page: num })
                })
                .catch(e => console.log(e))
        }
    }
}

export const getPaginationCount = () => {
    return dispatch => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(res => res.json())
            .then(res => {
                const count = Math.ceil(res.count / 54)
                dispatch({ type: 'GET_PAGINATION_COUNT', payload: count })
            })
    }
}

export const getNameListFromApi = () => {
    return dispatch => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(res => res.json())
            .then(data => {
                fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${data.count}`)
                    .then(res => res.json())
                    .then(res => {
                        dispatch({ type: 'GET_NAME_LIST_FROM_API', payload: res.results })
                    })
            })
    }
}

export const getSelectedPokemon = id => {
    return dispatch => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(res => {
                const pokemon = {
                    img: res.sprites.front_default,
                    name: res.name[0].toUpperCase() + res.name.slice(1),
                    types: res.types,
                    height: res.height,
                    weight: res.weight,
                    hp: res.stats[0].base_stat,
                    attack: res.stats[1].base_stat,
                    defense: res.stats[2].base_stat,
                    specalAttack: res.stats[3].base_stat,
                    specalDefense: res.stats[4].base_stat,
                    speed: res.stats[5].base_stat,
                }
                dispatch({ type: 'GET_SELECTED_POKEMON', payload: pokemon })
            })
    }
}

export const clearSelectedPokemon = () => ({ type: 'CLEAR_SELECTED_BOOK' })
