import { createContext, useContext, useState } from "react";

export const Context = createContext(null);

export function ContextWrapper({ children }) {
    const [results, setResults] = useState([])

    const store = {
        results: [results, setResults],
    }

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
}

