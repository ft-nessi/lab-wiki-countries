import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://ih-countries-api.herokuapp.com/';

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
      const dataList = await axios.get(url);
      console.log(dataList);
      setData(dataList);
    }
    fetchCountries();
  }, []);
  const countryObject = data.find((elem) => {
    return elem.alpha3Code === params.alpha3Code;
  });
  return (
    <>
      <div>CountryDetails</div>
      <h1>{countryObject.name.common}</h1>

      <img
        src={urlImage + countryObject.alpha2Code.toLowerCase() + '.png'}
        alt="Flag of country"
      ></img>
    </>
  );
}

export default CountryDetails;
