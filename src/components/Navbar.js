
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import allCountries from "../countries.json"
import CountriesList from './CountriesList'

function Navbar() {

  return (
    <div>
        <h1>LAB-WikiCountries</h1>
        <CountriesList allCountries={allCountries}/>
        <Outlet />
    </div>
  )
}

export default Navbar
