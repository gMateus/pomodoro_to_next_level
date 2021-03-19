import { createContext, ReactNode, useState } from "react";


interface SelectedPageProps {
    currentPage: string;
    selectCurrentPage: () => void;
}

export const SelectedPageContext = createContext({} as SelectedPageProps)

export function SelectedPageProvider({ children }) {

    const [currentPage, setCurrentPage] = useState('Home')

    function selectCurrentPage() {
        if (currentPage == 'Home')
            setCurrentPage('LeaderBoard')
    } {
        setCurrentPage('Home')
    }

    return (
        <SelectedPageContext.Provider
            value={{
                currentPage,
                selectCurrentPage
            }}
        >
            {children}
        </SelectedPageContext.Provider>
    )
}