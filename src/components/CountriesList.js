import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ allCountries }) {
  const urlImage = 'https://flagpedia.net/data/flags/icon/72x54/';

  return (
    <div>
      <h2>CountriesList</h2>
      <div>
        {allCountries.map((elem) => {
          return (
            <div key={elem.alpha3Code}>
              <img
                src={urlImage + elem.alpha2Code.toLowerCase() + '.png'}
                alt="Flag of country"
              />
              <br />
              <Link to={`${elem.alpha3Code}`}>{elem.name.common}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
