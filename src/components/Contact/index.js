import React from 'react';
import {Card, Icon, Divider, Container} from 'semantic-ui-react';
import './style.css';
const ContactComponent = () => {
    return(
        <div className="mainCont animate__animated animate__fadeIn animate__delay-2">
            <div className="headerCont">
                <h1>Datos de contacto</h1>
            </div>
            <div className="contactCards">
                <Card id="card">
                    <Card.Content>
                    <Card.Header>Numero de teléfono</Card.Header>
                    <Card.Meta>
                        Dato de contacto
                    </Card.Meta>
                    <Card.Description>
                    <Icon name='phone'/><tel>(+57) 311 3478769</tel>
                    </Card.Description>
                    </Card.Content>
                </Card>
                <Card id="card">
                    <Card.Content>
                    <Card.Header>Correo electrónico</Card.Header>
                    <Card.Meta>
                        Dato de contacto
                    </Card.Meta>
                    <Card.Description>
                    <Icon name='mail'/><email>daniel.rodriguezg97@gmail.com</email>
                    </Card.Description>
                    </Card.Content>
                </Card>
                </div>
                <div className="contactCards">
                <Card id="card">
                    <Card.Content>
                    <Card.Header>LinkedIn</Card.Header>
                    <Card.Meta>
                        Dato de contacto
                    </Card.Meta>
                    <Card.Description>
                    <Icon name='linkedin'/><a href="https://www.linkedin.com/in/drodriguez16/">drodriguez16</a>
                    </Card.Description>
                    </Card.Content>
                </Card>
                <Card id="card">
                    <Card.Content>
                    <Card.Header>Github</Card.Header>
                    <Card.Meta>
                        Dato de contacto
                    </Card.Meta>
                    <Card.Description>
                    <Icon name='github alternate'/><a href="https://github.com/danielrg97">danielrg97</a>
                    </Card.Description>
                    </Card.Content>
                </Card>
                </div>
                <Divider/>
                <Container fluid>
                    <blockquote>
                    <p>"La simplicidad es la sofisticación definitiva."</p>
                    <footer>- Leonardo DaVinci</footer>
                    </blockquote>
                </Container>
                <Divider /> 
        </div>
    );
}
export default ContactComponent;