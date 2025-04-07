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
                <ul className="movie_list">
                    {searchQuery.map((movie) => (
                        <div className="movie_card" key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
                            <p>{getFlagEmoji(movie.original_language)}</p>
                            <p>{movie.title}</p>
                            <p>{movie.original_title}</p>
                            <p>{movie.vote_average}</p>
                        </div>
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
                <ul className="movie_list">
                    {searchQueryTV.map((tv) => (
                        <div className="movie_card" key={tv.id}>
                            <img src={`https://image.tmdb.org/t/p/w185/${tv.poster_path}`} alt={tv.name} />
                            <p>{getFlagEmoji(tv.original_language)}</p>
                            <p>{tv.name}</p>
                            <p>{tv.original_name}</p>
                            <p>{tv.vote_average}</p>
                        </div>
                    ))}
                </ul>
            </div>

        </>


    )


}