import React from 'react'
import { useParams } from 'react-router-dom'
import allCountries from "../countries.json"
import useState from 'react'

const urlImage = "https://flagpedia.net/data/flags/icon/72x54/"

function CountryDetails() {
  const params = useParams();
  // const [image, setImage] = useState(null)
  console.log(allCountries);
  const countryObject = allCountries.find((elem) => {
    return elem.alpha3Code === params.alpha3Code  
  })

  console.log(params);
  console.log(countryObject);
  return (
    <>
      <div>CountryDetails</div>

      <h1>{countryObject.name.common}</h1>
      
      <img src={urlImage + countryObject.alpha2Code.toLowerCase() + ".png"} alt="Flag of country"></img>
    </>
  )
}

export default CountryDetails
