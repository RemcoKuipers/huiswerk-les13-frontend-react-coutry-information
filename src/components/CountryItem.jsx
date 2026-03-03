import './CountryItem.css';
import getRegionColor from '../helperfunctions/getRegionColor';

function CountryItem({ country }) {
    return (
        <li className="country-item">
            <h3 className={getRegionColor(country?.region)}>
                {country.name.common}
            </h3>

            <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                width="80"
            />

            <p>
                Has a population of {country.population} people
            </p>
        </li>
    );
}

export default CountryItem;