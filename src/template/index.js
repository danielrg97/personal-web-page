import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import './style.css';
import ContactComponent from '../components/Contact';
import ProfileComponent from '../components/Profile';
import CatalogComponent from '../components/Catalog';
import UserInSession from './user-in-session';
import { Dimmer, Icon, Loader, Popup } from "semantic-ui-react";
import { version } from './../../package.json';
import { useSelector } from "react-redux";

const Template = () => {
    const [toggle, setToggle] = useState(true);
    const logoutState = useSelector(state => state.logoutReducer);

    const scrollEvent = () => {
        let header = document.querySelector('.lateralMenu');
        if(header)
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
    const showUsername =()=>{
        console.log(localStorage.getItem("Authorization"), localStorage.getItem("UserInSession"))
        if(localStorage.getItem("Authorization") && localStorage.getItem("UserInSession")){
            return <UserInSession username={localStorage.getItem("UserInSession")}></UserInSession>;
        }else{
            return(
                <div className="logLinks" style={{display: "block", width:"8em", textAlign: "right"}}>
                    <Link className="onlyAdmin" to="/login">Iniciar sesión</Link>
                    <br/>
                    <Link className="onlyAdmin" to="/register">Registrarse</Link>
                </div>
            );

        }                    
    }
    return(
            <div className="mainContainer animate__animated animate__fadeIn animate__delay-2">
                <div className="allHeader">
                {logoutState.loading && logoutState.loading === true &&
                    <Dimmer active>
                        <Loader/>
                </Dimmer>}
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
                            <li id="itemMenu"><h3><Icon size="large" name="hand peace"/><br/><Link to="/index/"> Acerca de mí</Link></h3></li>
                            <li id="itemMenu"><h3><Icon size="large" name="heart"/><br/><Link to="/index/catalog"> Habilidades</Link></h3></li>
                            <li id="itemMenu"><h3><Icon size="large" name="address book"/><br/><Link to="/index/contact"> Contacto</Link></h3></li>
                        </ul>
                        {showUsername()}
                        </header>
                </div> 
                <div className="fragment">
                    <Route exact path="/index/" component={ProfileComponent} />
                    <Route path="/index/contact" component={ContactComponent} />  
                    <Route path="/index/catalog" component={CatalogComponent} />  
                    <h2 style={{textAlign:"center", padding: "1.5em", color:"lightgrey"}}><Icon name="angle down"/>Aquí termina esta sección<Icon name="angle down"/></h2>
                    <div className="extraInfoPage">
                            Esta página es elaborada<br/> con React.js y Javascript Vanilla <br/>
                            <Icon size="big" name="github"/><a href="https://github.com/danielrg97/personal-web-page">Ver codigo fuente</a>
                            <br/>
                            <span style={{color: "lightgrey", fontSize: "8"}}>Version {version}</span>
                    </div>
                </div>
            </div>
    );
}
export default Template;