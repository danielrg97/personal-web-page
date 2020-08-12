import React from 'react';
import {Card, Icon, Progress, Container, Header, Divider} from 'semantic-ui-react';

const CatalogComponent = () => {
    return(
        <div className="mainCont animate__animated animate__fadeIn animate__delay-2">
            <div className="headerCont">
                <h1>Habilidades</h1>
            </div>
            <div>
            <Divider/>
            <Container fluid>
                <Header as='h3'>Habilidades técnicas</Header>
                <p>A continuación se encontrará una estimación personal de mis conocimientos técnicos</p>
            <div className="contactCards">
                <Card id="card">
                    <Card.Content>
                    <Card.Header>Java EE</Card.Header>
                    <Card.Meta>
                        Conocimiento técnico
                    </Card.Meta>
                    <Card.Description>
                        <Progress percent={60} color="blue"/>
                    </Card.Description>
                    </Card.Content>
                </Card>
                <Card id="card">
                    <Card.Content>
                    <Card.Header>Java SE</Card.Header>
                    <Card.Meta>
                        Conocimiento técnico
                    </Card.Meta>
                    <Card.Description>
                        <Progress percent={80} color="blue"/>
                    </Card.Description>
                    </Card.Content>
                </Card>
                </div>
                <div className="contactCards">
                <Card id="card">
                    <Card.Content>
                    <Card.Header>SQL</Card.Header>
                    <Card.Meta>
                        Conocimiento técnico
                    </Card.Meta>
                    <Card.Description>
                        <Progress percent={65} color="blue"/>
                    </Card.Description>
                    </Card.Content>
                </Card>
                <Card id="card">
                    <Card.Content>
                    <Card.Header>React.js</Card.Header>
                    <Card.Meta>
                        Conocimiento técnico
                    </Card.Meta>
                    <Card.Description>
                        <Progress percent={70} color="blue"/>
                    </Card.Description>
                    </Card.Content>
                </Card>
                </div>
                <div className="contactCards">
                <Card id="card">
                    <Card.Content>
                    <Card.Header>Spring Framework</Card.Header>
                    <Card.Meta>
                        Conocimiento técnico
                    </Card.Meta>
                    <Card.Description>
                        <Progress percent={65} color="blue"/>
                    </Card.Description>
                    </Card.Content>
                </Card>
                <Card id="card">
                    <Card.Content>
                    <Card.Header>JavaScript</Card.Header>
                    <Card.Meta>
                        Conocimiento técnico
                    </Card.Meta>
                    <Card.Description>
                        <Progress percent={55} color="blue"/>
                    </Card.Description>
                    </Card.Content>
                </Card>
                </div>
                <div className="contactCards">
                <Card id="card">
                    <Card.Content>
                    <Card.Header>SQL</Card.Header>
                    <Card.Meta>
                        Conocimiento técnico
                    </Card.Meta>
                    <Card.Description>
                        <Progress percent={65} color="blue"/>
                    </Card.Description>
                    </Card.Content>
                </Card>
                <Card id="card">
                    <Card.Content>
                    <Card.Header>React.js</Card.Header>
                    <Card.Meta>
                        Conocimiento técnico
                    </Card.Meta>
                    <Card.Description>
                        <Progress percent={70} color="blue"/>
                    </Card.Description>
                    </Card.Content>
                </Card>
                </div>
                <div className="contactCards">
                <Card id="card">
                    <Card.Content>
                    <Card.Header>TDD (Pruebas unitarias)</Card.Header>
                    <Card.Meta>
                        Conocimiento técnico
                    </Card.Meta>
                    <Card.Description>
                        <Progress percent={80} color="blue"/>
                    </Card.Description>
                    </Card.Content>
                </Card>
                <Card id="card">
                    <Card.Content>
                    <Card.Header>GIT</Card.Header>
                    <Card.Meta>
                        Conocimiento técnico
                    </Card.Meta>
                    <Card.Description>
                        <Progress percent={70} color="blue"/>
                    </Card.Description>
                    </Card.Content>
                </Card>
                </div>
                <div className="contactCards">
                <Card id="card">
                    <Card.Content>
                    <Card.Header>AWS</Card.Header>
                    <Card.Meta>
                        Conocimiento técnico
                    </Card.Meta>
                    <Card.Description>
                        <Progress percent={50} color="blue"/>
                    </Card.Description>
                    </Card.Content>
                </Card>
                <Card id="card">
                    <Card.Content>
                    <Card.Header>DevOps</Card.Header>
                    <Card.Meta>
                        Conocimiento técnico
                    </Card.Meta>
                    <Card.Description>
                        <Progress percent={10} color="blue"/>
                    </Card.Description>
                    </Card.Content>
                </Card>
                </div>
            </Container>
            </div>
            <Divider/>
            <div>
            <Container fluid>
                <Header as='h3'>Habilidades blandas</Header>
            <div className="contactCards">
                <Card id="card">
                    <Card.Content>
                    <Card.Header>Inglés(Escritura)</Card.Header>
                    <Card.Meta>
                        Habilidad blanda
                    </Card.Meta>
                    <Card.Description>
                        <Progress percent={65} color="green"/>
                    </Card.Description>
                    </Card.Content>
                </Card>
                <Card id="card">
                    <Card.Content>
                    <Card.Header>Ingles(Lectura - Escucha)</Card.Header>
                    <Card.Meta>
                        Habilidad blanda
                    </Card.Meta>
                    <Card.Description>
                        <Progress percent={70} color="green"/>
                    </Card.Description>
                    </Card.Content>
                </Card>
                </div>
                <div className="contactCards">
                <Card id="card">
                    <Card.Content>
                    <Card.Header>Ingles(Oral)</Card.Header>
                    <Card.Meta>
                        Habilidad blanda
                    </Card.Meta>
                    <Card.Description>
                        <Progress percent={50} color="green"/>
                    </Card.Description>
                    </Card.Content>
                </Card>
                </div>
                <Divider/>
                <ul>
                    <li><Icon name="check"></Icon>Trabajo en equipo</li>
                    <li><Icon name="check"></Icon>Proactividad</li>
                    <li><Icon name="check"></Icon>Autodidacta</li>
                </ul>
                </Container>
                <Divider/>
            </div>
        </div>
    );
}
export default CatalogComponent;