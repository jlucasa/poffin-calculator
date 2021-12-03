import './HomePage.css';
import { Table, Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export const HomePage = () => {
    const [berriesJson, setBerriesJson] = useState(null);
    const [selectedBerries, setSelectedBerries] = useState([]);

    const addBerry = (berry) => {
        if (selectedBerries.length < 4) {
            const newSelectedBerries = [...selectedBerries, berry];
            setSelectedBerries(newSelectedBerries);

            const newBerriesJson = berriesJson.filter(b => b.name !== berry.name);
            setBerriesJson(newBerriesJson);
        }
    };

    const removeBerry = (berry) => {
        const newSelectedBerries = selectedBerries.filter(b => b.name !== berry.name);
        setSelectedBerries(newSelectedBerries);

        const newBerriesJson = [...berriesJson, berry];
        setBerriesJson(newBerriesJson);
    };

    useEffect(() => {
        fetch('/berries-info.json')
            .then(response => response.json())
            .then(json => setBerriesJson(json));
    }, []);

    return (
        <Container className="home-container">
            <Row style={{ paddingTop: '50px' }}>
                <h1>
                    <strong>Select a Berry</strong>
                </h1>
            </Row>
            <Row style={{ paddingTop: '20px' }}>
                
            </Row>
            <Row>
                <Col>
                    <Container fluid="lg">
                        <h1>Select a Berry</h1>
                        
                    </Container>
                </Col>
                <Col>
                    <h1>Selected Berries</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Spicy</th>
                                <th>Dry</th>
                                <th>Sweet</th>
                                <th>Bitter</th>
                                <th>Sour</th>
                                <th>Firmness</th>
                                <th>Smoothness</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedBerries.length > 0 && selectedBerries.map((berry, index) => {
                                return (
                                    <tr key={index}>
                                        <td style={{ width: '10%' }}><img className="berry-img" src={berry.Picture} alt={berry.Name} /></td>
                                        <td>{berry.Name}</td>
                                        <td>{berry.Spicy > 0 && berry.Spicy}</td>
                                        <td>{berry.Dry > 0 && berry.Dry}</td>
                                        <td>{berry.Sweet > 0 && berry.Sweet}</td>
                                        <td>{berry.Bitter > 0 && berry.Bitter}</td>
                                        <td>{berry.Sour > 0 && berry.Sour}</td>
                                        <td>{berry.Firmness}</td>
                                        <td>{berry.Smoothness}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            {/* <Row>
                <h1>All Berries</h1>
            </Row>
            <Row>
                <Container>
                    
                </Container>
            </Row> */}
        </Container>
    );
};