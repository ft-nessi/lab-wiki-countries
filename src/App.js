// src/App.js
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from "./components/CountriesList"
import CountryDetails from './components/CountryDetails';
import allCountries from "./countries.json"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navbar />} >
        <Route path="/:alpha3Code">
          {/* <Route index element={<CountriesList allCountries={allCountries}/>} /> */}
          <Route index element={<CountryDetails />} />
        </Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
