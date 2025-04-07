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
                        <ul className="movie_card" key={movie.id}>
                            <li>
                                <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} /></li>
                            <li>{getFlagEmoji(movie.original_language)}</li>
                            <li>{movie.title}</li>
                            <li>{movie.original_title}</li>
                            <li>{movie.vote_average}</li>
                        </ul>
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
                        <ul className="movie_card" key={tv.id}>
                            <li>
                                <img src={`https://image.tmdb.org/t/p/w342/${tv.poster_path}`} alt={tv.name} /></li>
                            <li>{getFlagEmoji(tv.original_language)}</li>
                            <li>{tv.name}</li>
                            <li>{tv.original_name}</li>
                            <li>{tv.vote_average}</li>
                        </ul>
                    ))}
                </ul>
            </div>

        </>


    )


}