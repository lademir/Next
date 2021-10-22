import { createContext, useState } from "react";

type Tema = 'dark' | ''

interface AppProvidesProps {
    tema?: Tema
    alternarTema?: () => void
}

const AppContext = createContext<AppProvidesProps>({})

export function AppProvider(props) {

    const [tema, setTema] = useState<Tema>('')

    function alternarTema() {
        setTema(tema === '' ? 'dark' : '')
    }

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContext