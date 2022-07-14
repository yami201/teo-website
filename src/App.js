import GlobalStyle from "./global.styles";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.route";
import Services from "./routes/services/services.route";
import Projects from "./routes/projects/projects.route";
import Navigation from "./routes/navigation/navigation.route";
import Contact from "./routes/contact/contact.route";
const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
}
export default App;