import { useGlobal } from "../contexts/GlobalContext"
import Header from '../components/Header'


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

            <Header />

            <div>
                <ul className="movie_list">
                    {searchQuery.map((movie) => (
                        <div key={movie.id} className="card" style={{ width: "18rem" }}>
                            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                            <div className="card-body">
                                <h2 className="card-title">{movie.title}</h2>
                                <h4 className="card-subtitle mb-2 text-muted ">{movie.original_title}</h4>
                                <p className="card-text">{movie.vote_average}</p>
                                <p>{getFlagEmoji(movie.original_language)}</p>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>


            <div>
                <ul className="movie_list">
                    {searchQueryTV.map((tv) => (
                        <div key={tv.id} className="card" style={{ width: "18rem" }}>
                            <img src={`https://image.tmdb.org/t/p/w300/${tv.poster_path}`} className="card-img-top" alt={tv.name} />
                            <div className="card-body">
                                <h2 className="card-title">{tv.name}</h2>
                                <h4 className="card-subtitle mb-2 text-muted ">{tv.original_name}</h4>
                                <p className="card-text">{tv.vote_average}</p>
                                <p>{getFlagEmoji(tv.original_language)}</p>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>

        </>


    )


}