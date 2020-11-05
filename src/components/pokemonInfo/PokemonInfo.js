import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectedPokemon, clearSelectedPokemon } from '../../actions';
import Loader from '../loader/Loader';

import './pokemonInfo.css';

class PokemonInfo extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getSelectedPokemon(id)
    }

    componentWillUnmount() {
        this.props.clearSelectedPokemon()
    }

    render() {
        const { img, name, types, height, weight, hp, attack, defense, specalAttack, specalDefense, speed } = this.props.selectedPokemon;
        if (!img) {
            return <Loader />
        }
        return (
            <div className='pokemon'>
                <div className='pokemon__info'>
                    <div>{name}</div>
                    <div>разновидность:
                    {types.map(({ type: { name } }) => {
                        return <span key={name}> {name}</span>
                    })}
                    </div>
                    <div>рост: {height}</div>
                    <div>вес: {weight}</div>
                    <div>здоровье: {hp}</div>
                    <div>атака: {attack}</div>
                    <div>разрушение: {defense}</div>
                    <div>специальная атака: {specalAttack}</div>
                    <div>специальное разрушение: {specalDefense}</div>
                    <div>скорость: {speed}</div>
                </div>
                <div className='pokemon__img-wrapp'>
                    <img src={img} alt={name} className='pokemon__img' />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ selectedPokemon }) => {
    return { selectedPokemon }
}

const mapDispatchToProps = {
    getSelectedPokemon, clearSelectedPokemon
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonInfo)