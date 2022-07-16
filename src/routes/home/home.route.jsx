import { useState, useCallback, useContext} from "react";
import {
    Container,
    MeshContainer,
    InfosContainer,
    Name,
    Subtitle,
    Paragraph,
} from "./home.styles";
import { LanguageContext } from "../../language.context";
import Grid from "../../components/grid/grid.component";
import Button from "../../components/button/button.component";
import LanguageSelector from "../../components/languague-selector/language-selector.component";
const Home = () => {
    const { currentLanguageIsEng } = useContext(LanguageContext)

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
                    <LanguageSelector/>
                    <Name>teo</Name>
                    <Subtitle>
                        <span>Lorem ipsum</span>
                        <span> dolor sit,</span>
                    </Subtitle>
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