import { useGlobal } from "../contexts/GlobalContext"

export default function MainPage() {

    const {
        searchQuery,
        searchQueryTV,
    } = useGlobal()

    const truncateText = (text) => text?.slice(0, 150) + (text?.length > 150 ? '...' : '')
    const truncateTitle = (text) => text?.slice(0, 30) + (text?.length > 30 ? '...' : '')


    return (

        <>

            <main>

                <div>
                    <h3 className="titol" style={{ textAlign: "center" }}>MOVIES</h3>
                    <ul className="movie_list">
                        {searchQuery.map((movie) => (
                            <div key={movie.id} className="card" style={{ width: "18rem" }}>
                                <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                                <div className="card-body">
                                    <h2 className="card-title">Titolo: {movie.title}</h2>
                                    <h4 className="card-subtitle mb-2 text-muted ">Titolo Originale: {truncateTitle(movie.original_title)}</h4>
                                    <p className="card-text">Voto: {"⭐".repeat(Number((movie.vote_average) / 2).toFixed()) +
                                        "☆".repeat(5 - Number((movie.vote_average) / 2).toFixed())}</p>
                                    <p>Overview: {truncateText(movie.overview)}</p>
                                    {/* <img src={getFlagEmoji(movie.original_language)} /> */}
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>


                <div>
                    <h3 className="titol" style={{ textAlign: "center" }}>SERIES TV</h3>
                    <ul className="movie_list">
                        {searchQueryTV.map((tv) => (
                            <div key={tv.id} className="card" style={{ width: "18rem" }}>
                                <img src={`https://image.tmdb.org/t/p/w342/${tv.poster_path}`} className="card-img-top" alt={tv.name} />
                                <div className="card-body">
                                    <h2 className="card-title">Titolo: {tv.name}</h2>
                                    <h4 className="card-subtitle mb-2 text-muted ">Titolo Originale: {truncateTitle(tv.original_name)}</h4>
                                    <p className="card-text"><p className="card-text">Voto: {"⭐".repeat(Number((tv.vote_average) / 2).toFixed()) +
                                        "☆".repeat(5 - Number((tv.vote_average) / 2).toFixed())}</p></p>
                                    <p>Overview: {truncateText(tv.overview)}</p>
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