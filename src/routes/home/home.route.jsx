import { useState, useCallback, useContext } from "react";
import { 
    Grid, 
    Container,
    HorizentalLine,
    VerticalLine,
    VerticalLinesContainer,
    HorizentalLinesContainer,
    MeshContainer,
    InfosContainer,
    Name,
    Subtitle,
    DiscoverButton,
    Paragraph,
    LanguageSelectorContainer,
    LanguageSelector,
    ButtonBorder
} from "./home.styles";
import { LanguageContext } from "../../language.context"; 
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
            <Grid>
                <VerticalLinesContainer state={buttonState}>
                    <VerticalLine></VerticalLine>
                    <VerticalLine></VerticalLine>
                    <VerticalLine></VerticalLine>
                    <VerticalLine></VerticalLine>
                </VerticalLinesContainer>

                <HorizentalLinesContainer state={buttonState}>
                    <HorizentalLine></HorizentalLine>
                    <HorizentalLine></HorizentalLine>
                </HorizentalLinesContainer>
            </Grid>
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
                    <DiscoverButton
                        onMouseOver={buttonHoveredHandler}
                        onMouseOut={buttonUnHoveredHandler}>
                        {currentLanguageIsEng ? 'discover':'décourvrir'}
                        <ButtonBorder/>
                    </DiscoverButton>
                    <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laudantium?</Paragraph>
                </InfosContainer>
            </Container>
        </>
    )
}
 
export default Home;