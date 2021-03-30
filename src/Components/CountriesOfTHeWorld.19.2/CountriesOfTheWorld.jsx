import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CountriesOfTheWorld() {

  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const { data } = await axios.get('https://restcountries.eu/rest/v2/all');
      setCountries(data.map(country => country.name));
    }
    getCountries();
  }, [countries]);

  useEffect(() => {
    setFilteredCountries(countries.filter(c => c.toLowerCase().includes(searchTerm.toLocaleLowerCase())));
  }, [searchTerm]);

  const onSearch = (e) => {
    console.log(e.currentTarget.value);
    setSearchTerm(e.currentTarget.value);
  }

  const getList = () => {
    return searchTerm.length > 0 ? filteredCountries : countries
  }

  return (
    <div>
      <input placeholder="Search" onChange={onSearch}></input>
      <ul>
        {getList().map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </div>
  )
}
export default CountriesOfTheWorld
