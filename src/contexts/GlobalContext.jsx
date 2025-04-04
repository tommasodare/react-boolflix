import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext()

function GlobalProvider({ children }) {
    const [user, setUser] = useState(null)  // Corretta sintassi destructuring

    return (
        <GlobalContext.Provider value={{ user, setUser }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext }