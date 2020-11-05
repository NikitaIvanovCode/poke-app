import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDataFromApi } from '../../actions';
import Pagination from '../pagination/Pagination';

import './cards.css';

class Cards extends Component {
    componentDidMount() {
        const { currentPage } = this.props;
        if (currentPage !== 1) {
            return this.props.getDataFromApi(currentPage)
        }
        return this.props.getDataFromApi()
    }

    render() {
        const { data } = this.props;

        return (
            <>
                <h2>Карточки</h2>

                <ul className='cards'>
                    {data.map((item, idx) => {
                        if (item === '404') {
                            return <li key={idx} className='cards__item'>{item}</li>
                        }

                        const card =
                            <li key={item.id} className='cards__item'>
                                <Link to={`/pokemon/${item.id}`}>
                                    <img className='cards__item-img' src={item.sprites.front_default} alt={item.name} />
                                    <div className='cards__item-title'>{item.name[0].toUpperCase() + item.name.slice(1)}</div>
                                </Link>
                            </li>

                        return card
                    })}
                </ul>

                <Pagination />
            </ >
        )
    }
}

const mapStateToProps = ({ data, currentPage }) => {
    return { data, currentPage }
}

const mapDispatchToProps = {
    getDataFromApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)