import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getData } from '../actions/index'

const StyledData = styled.div`
    margin: 5rem;
    display: flex;
    flex-direction: column;
   

    .header {
        margin-top: 4rem;
        text-align: left;
    }

    form {
        margin-top: 3rem;
    }

    input {
        padding: 0.5rem 10rem;
        text-align: left;
    }

    button {
        width: 10rem;
        padding: 0.5rem 1rem;
        margin: 1rem;
        border: none;
        box-shadow: 1px 1px 4px;
    }

    button:hover {
        color: #0C7ADA;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

    }

    .country-card {
        padding: 1rem 3rem;
        margin: 4rem;
        box-shadow: 1px 1px 4px;
        display: flex;
        flex-direction: column;
    }

    .country-card:hover {
        color: #0C7ADA;
;
    }
`

const Countries = ({ data, isFetching, error, getData }) => {
    const[search, setSearch] = useState('')
    useEffect(() => {

    }, [])

    if (error) {
        return <p>error: {error}</p>
    }

    if (isFetching) {
        return <p>hold uP we're fetching uR data</p>
    }

    const handleClick = () => {
        getData()
    } 
    
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(search)
    }

    return (
        <StyledData>
            <div className='header'>
                <h1>Coronavirus COVID-19 Tracker</h1>
                <p>A summary of new and total cases per country updated daily.</p>
            </div>
            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    placeholder='country'
                    value={search}
                    onChange={handleChange}
                />
                <button>search</button>
            </form>
            <div className='button'>
                <button onClick={handleClick}>update</button>
            </div>
            <div className='cards'>
                {data.map((country) => (
                    <div className='country-card'>
                        <div className='title'>
                            <h3>{country.Country}</h3>
                            <p>{country.Date}</p>
                        </div>
                        <div className='new'>
                            <p>New Confirmed Cases: {country.NewConfirmed}</p>
                            <p>New Deaths: {country.NewDeaths}</p>
                            <p>New Recovered: {country.NewRecovered}</p>
                        </div>
                        <div className='total'>
                            <p>Total Confrimed Cases: {country.TotalConfirmed}</p>
                            <p>Total Deaths: {country.TotalDeaths}</p>
                            <p>Total Recovered: {country.TotalRecovered}</p>
                        </div>
                    </div>
                ))}
            </div>
        </StyledData>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data,
        isFetching: state.isFetching, 
        error: state.error,
    }
}

export default connect(mapStateToProps, { getData })(Countries)