import React from 'react';
import { Button, Dimmer, Loader } from 'semantic-ui-react';
import FormRegister from './form';
import './style.css';
import { Link } from 'react-router-dom';
import { toastProperties, validateIfHasToken } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from './actions';
import { cleanReducer } from './../Login/actions'
import { toast } from 'react-toastify';

const RegisterComponent = ({history}) =>{
    const dispatch = useDispatch();
    const { error, loading } = useSelector(state => state.registerReducer);
    const formSubmit = values =>{
        dispatch(registerUser(values));
    }
    const validate = _ => {
        if(error !== false && typeof error !== 'undefined'){
            toast.warn(error.response.data.message, toastProperties);
        }else if(error === false){
            dispatch(cleanReducer());
            history.push("/login")
        }
    }
    return (
    <div class="register-container mainContainer animate__animated animate__fadeIn animate__delay-2">
            {
                validateIfHasToken(history)
            }
            {loading && loading === true &&
            <Dimmer active>
                <Loader/>
            </Dimmer>}
            {//Ya que estamos trabajando con redux, debemos validar estados en tiempos de renderizado
                validate()
            }
            <div class="form">
            <h1>Regístrate <br/>aquí</h1>
            <p>Llena el formulario</p>
            <div class="form-fields">
                <FormRegister submit={formSubmit}/>
            </div>
            <div class="form-buttons">
                <Button type="submit" form="formRegister">Crear cuenta</Button>
                <Link to="/login">Volver al inicio de sesión</Link>
                <br/>
                <Link to="/index">Ir al inicio</Link>
            </div>
        </div>
    </div>)
}

export default RegisterComponent;