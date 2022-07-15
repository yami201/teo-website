import { useState, useCallback, useContext } from "react";
import {
    Container,
    MeshContainer,
    InfosContainer,
    Name,
    Subtitle,
    Paragraph,
    LanguageSelectorContainer,
    LanguageSelector,
} from "./home.styles";
import { LanguageContext } from "../../language.context";
import Grid from "../../components/grid/grid.component";
import Button from "../../components/button/button.component";

const Home = () => {
    const { currentLanguageIsEng,setCurrentLanguageIsEng } = useContext(LanguageContext)
    console.log(currentLanguageIsEng)
    const enHandler = useCallback(() => setCurrentLanguageIsEng(true),[])
    const frHandler = useCallback(() => setCurrentLanguageIsEng(false),[])

    const [buttonState,setButtonState] = useState(false)
    const buttonHoveredHandler = useCallback(() => setButtonState(true),[])
    const buttonUnHoveredHandler = useCallback(() => setButtonState(false),[])

    
    return (
        <>
            <Grid buttonState={buttonState}/>
            <Container>
                <MeshContainer>
                    Mesh Goes Here
                </MeshContainer>
                <InfosContainer>
                    <LanguageSelectorContainer>
                        <LanguageSelector
                            onClick={enHandler}
                            selected={currentLanguageIsEng}
                        >EN</LanguageSelector>
                        <span>|</span>
                        <LanguageSelector
                            onClick={frHandler}
                            selected={!currentLanguageIsEng}
                        >FR</LanguageSelector>
                    </LanguageSelectorContainer>
                    <Name>teo</Name>
                    <Subtitle>Lorem ipsum dolor sit,</Subtitle>
                    <Button
                        onMouseOver={buttonHoveredHandler}
                        onMouseOut={buttonUnHoveredHandler}>
                        {currentLanguageIsEng ? 'discover':'décourvrir'}
                    </Button>
                    <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laudantium?</Paragraph>
                </InfosContainer>
            </Container>
        </>
    )
}
 
export default Home;