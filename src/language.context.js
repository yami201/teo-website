import { createContext, useEffect, useState } from "react";


export const LanguageContext = createContext({
    currentLanguageIsEng: null,
    setCurrentLanguageIsEng: () => null
})

export const LanguageProvider = ({children}) => {
    const [currentLanguageIsEng,setCurrentLanguageIsEng] = useState(true)
    useEffect(() => {
        if(navigator.language.includes('fr')){
            setCurrentLanguageIsEng(false)
        } else {
            setCurrentLanguageIsEng(true)
        }
    },[])
    const value = {currentLanguageIsEng,setCurrentLanguageIsEng}
    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}