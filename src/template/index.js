import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './style.css';
import ContactComponent from '../components/Contact';
import ProfileComponent from '../components/Profile';
import CatalogComponent from '../components/Catalog';
import { Icon, Popup } from "semantic-ui-react";
import { version } from './../../package.json';

const Template = () => {
    const [toggle, setToggle] = useState(true);
    const scrollEvent = () => {
        let header = document.querySelector('.lateralMenu');
        header.classList.toggle("sticky", window.scrollY > header.style.height);
    }
    useEffect(()=> {
        window.addEventListener("scroll", () => scrollEvent());
    },[]);
    const hamburguerToggle = () => {
        let menu = document.querySelector('.lateralMenu');
        setToggle(!toggle);
        toggle ? 
            menu.classList.replace("toggleMenuHide","toggleMenuShow")
        : menu.classList.replace('toggleMenuShow','toggleMenuHide');
    }
    return(
        <Router>
            <div className="mainContainer animate__animated animate__fadeIn animate__delay-2">
                <div class="allHeader">
                <Popup
                    trigger={<button id="hamburguer" onClick={() => hamburguerToggle()}/> }
                    content='Menú principal'
                    inverted
                    style={{opacity: 0.7}}
                    position='bottom left'
                />
                    <header className="lateralMenu toggleMenuHide">
                        <h1 style={{textAlign:"left", fontWeight:"900"}} className="title">Daniel <br/>Rodriguez's <br/>Page</h1>
                        <ul>
                            <li id="itemMenu"><h3><Icon size="large" name="hand peace"/><br/><Link to="/"> Acerca de mí</Link></h3></li>
                            <li id="itemMenu"><h3><Icon size="large" name="heart"/><br/><Link to="/catalog"> Habilidades</Link></h3></li>
                            <li id="itemMenu"><h3><Icon size="large" name="address book"/><br/><Link to="/contact"> Contacto</Link></h3></li>
                        </ul>
                        <Link class="onlyAdmin">Admin Dashboard</Link>{/** TODO: usuario en sesion debe verse aqui*/}   
                    {/*
                        
                        */}
                    </header>
                </div> 
                <div className="fragment">
                    <Route exact path="/" component={ProfileComponent} />
                    <Route path="/contact" component={ContactComponent} />  
                    <Route path="/catalog" component={CatalogComponent} />  
                    <h2 style={{textAlign:"center", padding: "1.5em", color:"lightgrey"}}><Icon name="angle down"/>Aquí termina esta sección<Icon name="angle down"/></h2>
                    <div className="extraInfoPage">
                            Esta página es elaborada<br/> con React.js y Javascript Vanilla <br/>
                            <Icon size="big" name="github"/><a href="https://github.com/danielrg97/personal-web-page">Ver codigo fuente</a>
                            <br/>
                            <span style={{color: "lightgrey", fontSize: "8"}}>Version {version}</span>
                    </div>
                </div>
            </div>
        </Router>
    );
}
export default Template;