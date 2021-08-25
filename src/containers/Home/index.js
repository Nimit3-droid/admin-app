import React from 'react';
import Layout from '../../components/Layout'
import {Jumbotron , Container,Row,Col} from 'react-bootstrap'
import './style.css'

function Home() {
    return (
        <Layout>
            <Container fluid>
                <Row>
                    <Col md={2} className="sidebar">SideBar</Col>
                    <Col md={10} style = {{marginLeft:'auto'}}>Container</Col>
                </Row>
            </Container>

            {/* <Jumbotron className="text-center" style={{margin : '5rem',background:'#fff'}}>
                <h1>Welcome to Admin Dashboard</h1>
                <p>lorem ipsum dolor sit am sdkf  sdf sd fosd fs fsfnimir akahannas apple is a fruit so er s</p>
            </Jumbotron> */}
        </Layout>
    )
}

export default Home
