import './CountryDetail.css';
import formatToMillions from '../helperfunctions/formatPopulation';

function CountryDetail({country}) {

    if (!country) return null;

    return (
        <div className="country-detail">

            <h2>
                <img
                    src={country.flags.png}
                    alt={`Flag of ${country.name.common}`}
                    width="60"
                />
                {country.name.common}
            </h2>

            <p>
                {country.name.common} is situated in {country.subregion}{" "}
                and the capital is {country.capital?.[0]}
            </p>

            <p>
                It has a population of {formatToMillions(country.population)}{" "}
                million people and it borders with {country.borders?.length || 0}{" "}
                neighboring countries
            </p>

            <p>
                Websites can be found on {country.tld?.[0]} domain's
            </p>

        </div>
    );
}

export default CountryDetail;