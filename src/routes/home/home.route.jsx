import { useState, useCallback, useContext} from "react";
import {
    Container,
    MeshContainer,
    InfosContainer,
    LogoContainer,
    Subtitle,
    Paragraph,
} from "./home.styles";
import { LanguageContext } from "../../language.context";
import Background from "../../components/grid/grid.component";
import Button from "../../components/button/button.component";
import LanguageSelector from "../../components/languague-selector/language-selector.component";
import HomeMeshContainer from "../../components/home-meshes-container/home-meshes-container.component";
const Home = () => {
    const { currentLanguageIsEng } = useContext(LanguageContext)

    const [buttonState,setButtonState] = useState(false)
    const buttonHoveredHandler = useCallback(() => setButtonState(true),[])
    const buttonUnHoveredHandler = useCallback(() => setButtonState(false),[])

    
    return (
        <>
            <Background buttonState={buttonState}/>
            <Container>
                <MeshContainer>
                    <HomeMeshContainer/>
                </MeshContainer>
                <InfosContainer>
                    <LanguageSelector/>
                    <LogoContainer>teo</LogoContainer>
                    <Subtitle>
                        <span>Lorem ipsum</span>
                        <span> dolor sit,</span>
                    </Subtitle>
                    <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laudantium?</Paragraph>
                </InfosContainer>
            </Container>
            <Button
                        onMouseOver={buttonHoveredHandler}
                        onMouseOut={buttonUnHoveredHandler}>
                        {currentLanguageIsEng ? 'discover':'découvrir'}
            </Button>
        </>
    )
}
 
export default Home;