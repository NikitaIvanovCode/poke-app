import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getNameListFromApi } from '../../actions';

import './listName.css';

const ListName = ({ getNameListFromApi, listNameData }) => {
    useEffect(() => {
        getNameListFromApi()
    }, [])

    return (
        <>
            <h2>Список имен</h2>

            <ul className='listName'>
                {listNameData.map(({ name, url }) => {
                    const id = url.split('/')[6]
                    const item =
                        <li key={name} className='listName__item'>
                            <Link to={`/pokemon/${id}`}>
                                {name[0].toUpperCase() + name.slice(1)}
                            </Link>
                        </li>
                    return item
                })}
            </ul>
        </>
    )
}

const mapStateToProps = ({ listNameData }) => {
    return { listNameData }
}

const mapDispatchToProps = {
    getNameListFromApi
}

export default connect(mapStateToProps, mapDispatchToProps)(ListName)
