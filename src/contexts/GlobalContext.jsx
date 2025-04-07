import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()
const api_key = import.meta.env.VITE_API_KEY


function GlobalProvider({ children }) {

    const [movies, setMovies] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    return (

        <GlobalContext.Provider value={{ movies, setMovies, searchQuery, setSearchQuery }}>
            {children}
        </GlobalContext.Provider>

    )

}

function useGlobal() {
    return useContext(GlobalContext)
}

export { useGlobal, GlobalProvider }