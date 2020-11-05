import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Cards from '../cards/Cards';
import ListName from '../listName/ListName';
import PokemonInfo from '../pokemonInfo/PokemonInfo';

import './app.css';

const App = () => {
    return (
        <>
            <Navbar />
            <div className='main'>
                <Switch>
                    <Route path='/' exact component={Cards} />
                    <Route path='/list' component={ListName} />
                    <Route path='/pokemon/:id' component={PokemonInfo} />
                </Switch>
            </div>
        </>
    )
}

export default App