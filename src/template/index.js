import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './style.css';
import ContactComponent from '../components/Contact';
import ProfileComponent from '../components/Profile';
import CatalogComponent from '../components/Catalog';
import { Icon } from "semantic-ui-react";

const Template = () => {
    return(
        <Router>
            <div className="mainContainer animate__animated animate__fadeIn animate__delay-2">
                <div className="lateralMenu">
                    <h1 style={{textAlign:"left", fontWeight:"900"}} className="title">Daniel Rodriguez's <br/>Page</h1>
                    <ul>
                        <li id="itemMenu"><h3><Icon size="large" name="hand peace"/><Link to="/"> Acerca de mí</Link></h3></li>
                        <li id="itemMenu"><h3><Icon size="large" name="heart"/><Link to="/catalog"> Habilidades</Link></h3></li>
                        <li id="itemMenu"><h3><Icon size="large" name="address book"/><Link to="/contact"> Contacto</Link></h3></li>
                    </ul>
                    <p className="extraInfoPage">
                        Esta página es elaborada<br/> únicamente con React.js <br/>
                        por Daniel Rodriguez. <br/>
                        <Icon size="big" name="github"/><a href="https://github.com/danielrg97/personal-web-page">Ver codigo fuente</a>
                    </p>
                </div>
                <div className="fragment">
                    <Route exact path="/" component={ProfileComponent} />
                    <Route path="/contact" component={ContactComponent} />  
                    <Route path="/catalog" component={CatalogComponent} />  
                </div>
            </div>
        </Router>
    );
}
export default Template;