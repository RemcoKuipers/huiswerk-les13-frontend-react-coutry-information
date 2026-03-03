import './App.css';
import worldmap from './assets/world_map.png';
import axios from 'axios';
import { useState } from 'react';
import CountryItem from './components/CountryItem';

function App() {
    const [countriesData, setCountriesData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

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