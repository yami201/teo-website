import { 
    GridContainer,
    VerticalLine,
    HorizentalLine,
    VerticalLinesContainer,
    HorizentalLinesContainer, 
    StarsBackground
} from "./grid.styles"; 
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useState } from "react";
const Background =  ({ buttonState } ) => {
    const [windowWidth,setWindowWidth] = useState(window.innerWidth)

    window.addEventListener('resize' , () => setWindowWidth(window.innerWidth))
    return (
        <>
            <GridContainer>
                <StarsBackground>
                    <Canvas>
                        <Stars radius={1} depth={2} count={700} factor={0.15} fade speed={1} />
                    </Canvas>
                </StarsBackground>
                <VerticalLinesContainer state={buttonState}>
                    <VerticalLine></VerticalLine>
                    <VerticalLine></VerticalLine>
                    <VerticalLine></VerticalLine>
                    {window.innerWidth >850 && <VerticalLine></VerticalLine>}
                </VerticalLinesContainer>

                <HorizentalLinesContainer state={buttonState}>
                    <HorizentalLine></HorizentalLine>
                    <HorizentalLine></HorizentalLine>
                    {window.innerWidth <=850 
                    && 
                        <>
                            <HorizentalLine></HorizentalLine>
                            <HorizentalLine></HorizentalLine> 
                        </>}
                </HorizentalLinesContainer>
            </GridContainer>
        </>
    );
}
 
export default Background;