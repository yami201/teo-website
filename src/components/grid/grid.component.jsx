import { 
    GridContainer,
    VerticalLine,
    HorizentalLine,
    VerticalLinesContainer,
    HorizentalLinesContainer
} from "./grid.styles"; 

const Grid =  ({ buttonState } ) => {
    return (
        <GridContainer>
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
    );
}
 
export default Grid;