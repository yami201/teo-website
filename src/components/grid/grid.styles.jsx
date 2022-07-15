import styled, { css } from 'styled-components';


const lineStyle = (vertical) => {
    const dimension = 
        vertical ? 
            css`
                width: 1px;
                height: 100vh;
            ` : 
            css`
                width: 100vw;
                height: 1px;
            `
    return css`
        ${dimension}
        background-color: white;
        opacity: 0.1;
        transition: 700ms;
    `
}
export const GridContainer = styled.div`
    position: absolute;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`
export const VerticalLine = styled.span`
    ${lineStyle(true)}
`
export const HorizentalLine = styled.span`
    ${lineStyle(false)}

`
export const HorizentalLinesContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${({state}) => {
        if(state){
            return(
                `
                    ${HorizentalLine}:first-child{
                        opacity:0.5;
                        transform:translateY(28.6vh)
                    }
                    ${HorizentalLine}:last-child{
                        opacity:0.5;
                        transform:translateY(-14vh)
                    }
                `
            )
        }
    }}

`
export const VerticalLinesContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;

    ${({state}) => {
        if(state){
            return  (
                `${VerticalLine}:nth-child(3){
                    opacity:0.5;
                    transform: translateX(-5.6vw);
                }
                ${VerticalLine}:nth-child(4){
                    opacity:0.5;
                    transform: translateX(-10.4vw);
                }`
            )
        }
        
    }}
`