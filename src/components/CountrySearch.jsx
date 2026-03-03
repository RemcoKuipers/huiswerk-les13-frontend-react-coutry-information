function CountrySearch({ searchTerm, setSearchTerm, onSearch }) {

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            onSearch();
        }
    }

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                placeholder="Search for a country..."
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <button onClick={onSearch}>
                Zoek
            </button>
        </div>
    );
}

export default CountrySearch;