import { useGlobal } from "../contexts/GlobalContext"


export default function Main() {

    const { searchText, setSearchText, searchQuery, setSearchQuery, handleSearch, handleSearchTV, searchQueryTV, setSearchQueryTV } = useGlobal()

    const getFlagEmoji = (countryCode) => {

        const languageToCountry = {
            'en': 'gb',
            'ja': 'jp',
            'ko': 'kr',
            'zh': 'cn',
            'hi': 'in',
        }

        const countryFlag = languageToCountry[countryCode] || countryCode

        try {

            return <img
                src={`https://flagcdn.com/24x18/${countryFlag}.png`}
                alt={`${countryCode} flag`}
                onError={(e) => {
                    e.target.src = 'https://flagcdn.com/24x18/xx.png'
                }}
            />
        } catch {
            return countryCode.toUpperCase()
        }
    }

    return (

        <>


            <div className="container">
                <div className="nav">
                    <h1>Boolflix</h1>
                </div>

                <h1>MOVIE</h1>
                <form className="d-flex" role="search" onSubmit={handleSearch}>
                    <input className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

            <div>
                <ul>
                    {searchQuery.map((movie) => (
                        <li key={movie.id}>{movie.title}, {movie.original_title}, {getFlagEmoji(movie.original_language)}, {movie.vote_average}</li>
                    ))}
                </ul>
            </div>

            <div className="container">
                <h1>TV</h1>
                <form className="d-flex" role="search" onSubmit={handleSearchTV}>
                    <input className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>


            <div>
                <ul>
                    {searchQueryTV.map((tv) => (
                        <li key={tv.id}>{tv.name}, {tv.original_name}, {getFlagEmoji(tv.original_language)}, {tv.vote_average}</li>
                    ))}
                </ul>
            </div>

        </>


    )


}