import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { logoutAction } from './actions';
import { cleanReducer } from '../../components/Login/actions';


const UserInSession = ({username}) => {

    const dispatch = useDispatch();

    const items = [
        {
            key: 'Menú administrativo',
            text: 'Menú administrativo',
            value: 'Menú administrativo',
            role: 'admin',
            label: { color: 'white', empty: true, circular: true },
          },
          {
            key: 'Cerrar sesión',
            text: 'Cerrar sesión',
            value: 'Cerrar sesión',
            label: { color: 'red', empty: true, circular: true },
          }
    ]
    const logout = _ => {
        dispatch(logoutAction());
        dispatch(cleanReducer());
    }
    return( 
    <div>
        
        <span style={{color: "white"}}>
            <Dropdown
                text={`${username}`}
                floating
                labeled
                icon='user'
                style={{padding: "1em"}}
            >
                 <Dropdown.Menu>
                    <Dropdown.Header icon='cogs' content='Opciones' />
                    <Dropdown.Menu scrolling>
                        {items.map((option) => (
                            option.value === 'Cerrar sesión'  
                            ? <Dropdown.Item key={option.value} {...option} onClick={() => logout()} />
                            : option.role === localStorage.getItem('UserRole') ? 
                            <Dropdown.Item key={option.value} {...option} onClick={() => alert("Menu")} />:""
                        ))}
                    </Dropdown.Menu>
                </Dropdown.Menu>
            </Dropdown>
        </span>
    </div>)
};
export default UserInSession;