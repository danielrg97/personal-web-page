import React from 'react';
import './style.css';
import {Container, Header, Divider} from 'semantic-ui-react';
import image from './../../resources/img/profile2.jpg'; 
const ProfileComponent = () => {
    return( 
        <div className="mainCont animate__animated animate__fadeIn animate__delay-2">
            <div className="headerCont">
                <h1>Acerca de mí</h1>
                <img className="profilePic" alt="profile pic" src={image}></img>
                <p>Daniel Alejandro Rodriguez Gomez</p>
            </div>
            <div className="content">
                <Divider/>
                <Container fluid>
                    <blockquote>
                    <p>"Tu trabajo va a llenar gran parte de tu vida, la única manera de estar realmente satisfecho es hacer lo que creas que es un gran trabajo y la única manera de hacerlo es amar lo que haces."</p>
                    <footer>- Steve Jobs</footer>
                    </blockquote>
                </Container>
                <Divider />
                <Container fluid>
                    <Header as='h3'>Breve descripción</Header>
                    <p align="justify">
                        Soy un gran apasionado del desarrollo de software. Cuento con 2 años y medio laborando en desarrollo fullstack de aplicaciones web, he contado con enriquecedoras experiencias laborales; en 2017 tuve la oportunidad de participar en un proyecto ganador del premio Duke's Choice Award que celebra Oracle para las comunidades de programadores Java. En el ultimo proyecto que participé pudimos desplegar una aplicación legacy elaborada en Spring y React a la nube con AWS, se refactorizó algunas partes del codigo con mejores practicas y mejoramos notablemente la deuda tecnica, abarcamos el proyecto con Hacking Continuo, dimos soporte a bugs y desarrollamos nuevos requerimientos levantados por el negocio.
                    </p>
                    <p align="justify">
                        Tengo experiencia trabajando por parte del Backend en desarrollo de aplicaciones web con las especificaciones de Java EE (JPA, EJB, Servlets, etc.) con arquitectura monoliticas usando JSF para la capa del cliente y tambien con web services con JAX-WS y JAX-RS usando Jersey. Tambien he trabajado con Spring Framework en web services utilizando en la capa de datos el ORM Hibernate, tambien con el desarrollo de pruebas unitarias con JUnit, Mockito y Powermockito y pruebas de aceptación con SOAP UI ademas de testear el API con Postman y documentarlo con Swagger. Tengo conocimientos con Spring MVC y Thymeleaf para aplicaciones monoliticas y en arquitecturas de microservicios con SpringBoot y con las tecnologias cloud de Netflix como Eureka, Hystrix, Zuul, entre otras.
                    </p>
                    <p align="justify">
                        En Frontend cuento con 1 año y medio de experiencia trabajando con Javascript en React.js y manejo de estados con Redux, manejo de los formularios con Redux Form y Formik, tambien con el desarrollo de pruebas unitarias con Mocha, Chai, Enzyme y Sinon. Tengo conocimientos en React Hooks y la nueva implementación de React Redux con Hooks de versiones mayores a 16.8.
                    </p>
                    <p align="justify">
                        En metodología he trabajado bajo el marco de trabajo Scrum con el rol de Solucionador y en DevOps ejecutando los CI y CD para su correspondiente integracion y despliegue en ambientes intermedios y produccion en un proyecto con 100% de adopción con la herramienta de Azure Visual Studio Team Services (VSTS). En temas de nube he trabajado con AWS para analisis de logs y de disponibilidad del servicio con CloudWatch, tambien tengo conocimiento en despliegues de paginas web estáticas y alojamiento de información en S3, creación y manipulación de Instancias EC2 para despliegues de aplicaciones y servicios web.
                    </p>
                </Container>
                <Divider/>
            </div>
        </div>
    )
}
export default ProfileComponent;