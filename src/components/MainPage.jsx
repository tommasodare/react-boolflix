import { useGlobal } from "../contexts/GlobalContext"

export default function MainPage() {

    const {
        searchQuery,
        searchQueryTV,
    } = useGlobal()

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

            <main>

                <div>
                    <h1 className="titol" style={{ textAlign: "center" }}>MOVIES</h1>
                    <ul className="movie_list">
                        {searchQuery.map((movie) => (
                            <div key={movie.id} className="card" style={{ width: "18rem" }}>
                                <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                                <div className="card-body">
                                    <h2 className="card-title">Titolo: {movie.title}</h2>
                                    <h4 className="card-subtitle mb-2 text-muted ">Titolo Originale: {movie.original_title}</h4>
                                    <p className="card-text">Voto: {"⭐".repeat(Number((movie.vote_average) / 2).toFixed()) +
                                        "☆".repeat(5 - Number((movie.vote_average) / 2).toFixed())}</p>
                                    <p>Overview: {movie.overview}</p>
                                    {/* <img src={getFlagEmoji(movie.original_language)} /> */}
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>


                <div>
                    <h1 className="titol" style={{ textAlign: "center" }}>SERIES TV</h1>
                    <ul className="movie_list">
                        {searchQueryTV.map((tv) => (
                            <div key={tv.id} className="card" style={{ width: "18rem" }}>
                                <img src={`https://image.tmdb.org/t/p/w342/${tv.poster_path}`} className="card-img-top" alt={tv.name} />
                                <div className="card-body">
                                    <h2 className="card-title">Titolo: {tv.name}</h2>
                                    <h4 className="card-subtitle mb-2 text-muted ">Titolo Originale: {tv.original_name}</h4>
                                    <p className="card-text"><p className="card-text">Voto: {"⭐".repeat(Number((tv.vote_average) / 2).toFixed()) +
                                        "☆".repeat(5 - Number((tv.vote_average) / 2).toFixed())}</p></p>
                                    <p>Overview: {tv.overview}</p>
                                    {/* <p>{getFlagEmoji(tv.original_language)}</p> */}
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>

            </main>


        </>

    )


}