import './App.css';
import worldmap from './assets/world_map.png';
import axios from 'axios';
import { useState } from 'react';
import CountryItem from './components/CountryItem';
import CountryDetail from "./components/CountryDetail.jsx";
import CountrySearch from "./components/CountrySearch.jsx";

function App() {
    const [countriesData, setCountriesData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [error, setError] = useState("");

    async function fetchCountry() {
        if (!searchTerm.trim()) return;

        try {
            const response = await axios.get(
                `https://restcountries.com/v3.1/name/${searchTerm}`
            );

            setSelectedCountry(response.data[0]);
            setError("");
            setSearchTerm("");

        } catch (err) {
            setSelectedCountry(null);
            setError(`${searchTerm} bestaat niet. Probeer het opnieuw.`);
            setSearchTerm("");
        }
    }

    async function fetchCountriesData() {
        try {
            const response = await axios.get(
                'https://restcountries.com/v3.1/all?fields=name,flags,population,region'
            );

            const sortedData = [...response.data].sort(
                (a, b) => a.population - b.population
            );

            setCountriesData(sortedData);
            setIsLoaded(true);

        } catch (e) {
            console.error(e);
        }
    }


    return (
        <>
            <header>
                <img src={worldmap} alt="World map" />
            </header>

            <section>
                <h2>World Regions</h2>

                {!isLoaded && (
                    <button type="button" onClick={fetchCountriesData}>
                        Landen info
                    </button>
                )}

                <hr />

                <h2>Search Country</h2>

                <CountrySearch
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    onSearch={fetchCountry}
                />

                {error && <p style={{ color: "red" }}>{error}</p>}

                <CountryDetail country={selectedCountry} />

                <ul>
                    {countriesData.map((country) => (
                        <CountryItem
                            key={country.name.common}
                            country={country}
                        />
                    ))}
                </ul>

            </section>
        </>
    );
}

export default App;