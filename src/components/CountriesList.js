import React from 'react'
import { Link } from 'react-router-dom'
// import allCountries from "../countries.json"

function CountriesList({ allCountries }) {

  return (
    <div>
      <h2>CountriesList</h2>
      <div>{allCountries.map((elem) => {
        return (<div key={elem.alpha3Code}>
         <Link to={`${elem.alpha3Code}`}>{elem.name.common}</Link>
        </div>)
      })}</div>
    </div>
  )
}

export default CountriesList
