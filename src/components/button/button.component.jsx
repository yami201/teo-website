import { ButtonWrapper , ButtonBorder } from "./button.styles";

const Button = ({children,...props}) => {
    return ( 
        <ButtonWrapper {...props}>
            {children}
            <ButtonBorder/>
        </ButtonWrapper>
     );
}
 
export default Button;