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
const Background =  ({ buttonState } ) => {
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
                    <VerticalLine></VerticalLine>
                </VerticalLinesContainer>

                <HorizentalLinesContainer state={buttonState}>
                    <HorizentalLine></HorizentalLine>
                    <HorizentalLine></HorizentalLine>
                </HorizentalLinesContainer>
            </GridContainer>
        </>
    );
}
 
export default Background;