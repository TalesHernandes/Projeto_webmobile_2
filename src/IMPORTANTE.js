//pegar função de filtragem de nome e filtragem alfabética!!!!

import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [countriesFiltered, setCountriesFiltered] = useState([]);

  useEffect(() => {
    getCountries().then(c => {
      setCountries(c.sort(sortName));
      setCountriesFiltered(c);
    });
  }, []);

  function handleChange(event) {
    var str = event.target.value;
    var temp = countries.filter(country =>
      country.name.common.toUpperCase().includes(str.toUpperCase())
    );
    setCountriesFiltered(temp);
  }

  const countryViews = countriesFiltered.map(country => (
    <CountryView info={country} key={country.cca3} />
  ));

  return (
    <div className="App">
      <header>
        <input type="text" placeholder="Search" onChange={handleChange} />
      </header>
      <section className="countries">{countryViews}</section>
    </div>
  );
}

function CountryView({ info }) {
  return (
    <article>
      {info.name.common} {info.flag}
    </article>
  );
}

function getCountries() {
  return fetch("https://restcountries.com/v3.1/all")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch(error => {
      console.error("There was a problem fetching countries:", error);
    });
}

function sortName(a, b) {
  if (a.name.common < b.name.common) {
    return 1;
  } else if (a.name.common > b.name.common) {
    return -1;
  }
  return 0;
}
