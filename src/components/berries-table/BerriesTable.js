import { Table } from "react-bootstrap";

export const BerriesTable = ({ berries }) => {
    return (
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
                {berries && berries.map((berry, index) => {
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
    )
};