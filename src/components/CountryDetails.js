import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://ih-countries-api.herokuapp.com/countries';

function CountryDetails() {
  const params = useParams();
  const [data, setData] = useState([]);

  const urlImage = 'https://flagpedia.net/data/flags/icon/72x54/';

  useEffect(() => {
    async function fetchCountries() {
      // const res = await fetch(url);
      // const dataList = await res.json();
      // console.log(dataList);
      // setData(dataList);
      const {data} = await axios.get(url);
      setData(data);
    }
    fetchCountries();
  }, []);
  console.log(data);
  const countryObject = data.find((elem) => {
    return elem.alpha3Code === params.alpha3Code;
  });

  if (!countryObject) {
    return null;
  }

  return (
    <>
      <div>CountryDetails</div>
      <h1>{countryObject.name.common}</h1>

      <img
        src={urlImage + countryObject.alpha2Code.toLowerCase() + '.png'}
        alt="Flag of country"
      ></img>
      <h1>{countryObject.area}</h1>
      <h1>{countryObject.borders.map((elem1) => {
        const countryName = data.filter((elem2) => {
          return elem2.alpha3Code === elem1
        })
        console.log(countryName);
        return <h3 key={countryName[0].alpha3Code}><Link to={`/${countryName[0].alpha3Code}`}>{countryName[0].name.common}</Link></h3>
      })}</h1>
    </>
  );
}

export default CountryDetails;
