import { useGlobal } from "../contexts/GlobalContext"


export default function Main() {

    const { searchText, setSearchText, searchQuery, setSearchQuery, handleSearch } = useGlobal()

    return (

        <>
            <div className="container">
                <div className="nav">
                    <h1>Boolflix</h1>
                </div>
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
                        <li key={movie.id}>{movie.title}</li>
                    ))}
                </ul>
            </div>


        </>


    )


}