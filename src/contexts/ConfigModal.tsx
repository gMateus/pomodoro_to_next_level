import { createContext, useState } from "react";

export const ConfigModalContext = createContext({} as ConfigModalData)

interface ConfigModalData {
    configureModal: () => void;
    isConfigureOpen: boolean;
}

export function ConfigModalProvider({ children }) {

    const [isConfigureOpen, setIsConfigureOpen] = useState(false)

    function configureModal() {

        if (isConfigureOpen == true) {
            setIsConfigureOpen(false)
        } else {
            setIsConfigureOpen(true)
        }

    }


    return (
        <ConfigModalContext.Provider
            value={{
                configureModal,
                isConfigureOpen
            }}>
            {children}
        </ConfigModalContext.Provider>
    )
}