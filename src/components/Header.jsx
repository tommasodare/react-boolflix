import { useGlobal } from "../contexts/GlobalContext"

export default function Header() {

    const {
        searchText,
        setSearchText,
        handleSearch,
        handleSearchTV
    } = useGlobal()


    return (

        <>

            <header>

                <div className="left_container">
                    <div className="nav">
                        <img src="https://img.icons8.com/?size=100&id=20519&format=png&color=000000" alt="" />
                    </div>
                </div>

                <div className="rigth_container">

                    <div className="movie">
                        <h3>MOVIES</h3>
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

                    <div className="tv">
                        <h3>SERIES TV</h3>
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

                </div>

            </header>



        </>

    )
}