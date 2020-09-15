import React from 'react';
import FormLogin from './form';
import './style.css';
import { Button, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {loginAction} from './actions';
import { toast } from 'react-toastify';
import { toastProperties } from '../../utils/utils';


const LoginComponent = ({history}) =>{

    const dispatch = useDispatch();
    const {loading, error} = useSelector(state => state.loginReducer);
    

    const formSubmit = (values)=>{
        dispatch(loginAction(values));
    }
    const validate = _ => {
        if(error !== false && typeof error !== 'undefined'){
            toast.warn(error.response.data.message, toastProperties);
        }else if(error === false && localStorage.getItem("Authorization")){
            history.push("/index")
        }
    }
    return (
    <div class="login-container mainContainer animate__animated animate__fadeIn animate__delay-2">
            {loading && loading === true &&
            <Dimmer active>
                <Loader/>
            </Dimmer>}
            {//Ya que estamos trabajando con redux, debemos validar estados en tiempos de renderizado
                validate()
            }
            <div class="form">
            <h1>Iniciar <br/>sesión</h1>
            <p>Inicia sesión con tus credenciales</p>
            <div class="form-fields">
                <FormLogin submit={formSubmit}/>
            </div>
            <div class="form-buttons">
                <Button type="submit" form="formLogin" >Iniciar sesión</Button>
                <a href="#" >Olvidé la contraseña</a>
                <p>¿No tienes cuenta?   <Link to="/register">Regístrate aquí</Link></p>
            </div>
        </div>
    </div>)
}

export default LoginComponent;