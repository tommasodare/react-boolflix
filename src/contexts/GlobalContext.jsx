import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()
const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY


function GlobalProvider({ children }) {

    const [searchText, setSearchText] = useState("")
    const [searchQuery, setSearchQuery] = useState([])
    const [searchQueryTV, setSearchQueryTV] = useState([])


    const handleSearch = (e) => {
        e.preventDefault()
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setSearchQuery(data.results)
            })
            .catch(err => console.log(err))

    }

    const handleSearchTV = (e) => {
        e.preventDefault()
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setSearchQueryTV(data.results)
            })
            .catch(err => console.log(err))

    }


    return (

        <GlobalContext.Provider value={{ searchText, setSearchText, searchQuery, setSearchQuery, handleSearch, handleSearchTV, searchQueryTV, setSearchQueryTV }}>
            {children}
        </GlobalContext.Provider>

    )

}

function useGlobal() {
    return useContext(GlobalContext)
}

export { useGlobal, GlobalProvider }