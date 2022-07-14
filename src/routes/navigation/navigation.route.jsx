import { Outlet } from "react-router-dom";
import { NavigationContainer, NavLinks , NavLink} from "./navigation.style"
import { useRef } from "react";
import second from 'react-icons'
const Navigation = () => {
    const activeRoute = useRef(0)
    return  (
        <>
            <NavigationContainer>
                <span>TEO</span>
                <NavLinks>
                    <NavLink 
                        to='/' 
                        color='yellow' 
                        activeroute={activeRoute.current}
                        >

                            <span>about</span>
                        </NavLink>
                    <NavLink 
                        to='/services' 
                        color="red" 
                        activeroute={activeRoute.current}
                        >

                            <span></span>services
                        </NavLink>
                    <NavLink 
                        to='/projects' 
                        color="cyan" 
                        activeroute={activeRoute.current}
                        >

                            <span></span>projects
                        </NavLink>
                    <NavLink 
                        to='/contact' 
                        color="#51ff00" 
                        activeroute={activeRoute.current}
                        >

                            <span></span>contact
                        </NavLink>
                </NavLinks>
            </NavigationContainer>
            <Outlet/>
        </>
    )
    
}
 
export default Navigation;