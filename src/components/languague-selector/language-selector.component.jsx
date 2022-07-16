import { useCallback, useContext } from "react"
import { LanguageContext } from "../../language.context"
import { LanguageSelectorContainer , Selector } from "./language-selector.styles"
const LanguageSelector = () => {
    const { currentLanguageIsEng,setCurrentLanguageIsEng } = useContext(LanguageContext)
    const enHandler = useCallback(() => setCurrentLanguageIsEng(true),[])
    const frHandler = useCallback(() => setCurrentLanguageIsEng(false),[])
    return ( 
        <LanguageSelectorContainer>
            <Selector
                onClick={enHandler}
                selected={currentLanguageIsEng}
            >EN</Selector>
            <span>|</span>
            <Selector
                onClick={frHandler}
                selected={!currentLanguageIsEng}
            >FR</Selector>
        </LanguageSelectorContainer>
     );
}
 
export default LanguageSelector;