import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPaginationCount, getDataFromApi } from '../../actions';

import './pagination.css';

const Pagination = ({ paginationCount, getPaginationCount, getDataFromApi, currentPage }) => {
    useEffect(() => {
        getPaginationCount()
    }, [])

    const changePage = num => {
        getDataFromApi(num)
    }

    const count = []
    for (let i = 1; i <= paginationCount; i++) {
        count.push(i)
    }

    return (
        <ul className='pagination'>
            {count.map(num => {
                let active = '';
                if (num === currentPage) {
                    active = 'active'
                } else {
                    active = ''
                }
                return <li className={`pagination-item ${active}`} key={num} onClick={() => changePage(num)}>{num}</li>
            })}
        </ul>
    )
}

const mapStateToProps = ({ paginationCount, currentPage }) => {
    return { paginationCount, currentPage }
}

const mapDispatchToProps = {
    getPaginationCount, getDataFromApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)