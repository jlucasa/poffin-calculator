import { InputGroup, Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

export const BerrySearch = ({ berries, onChange, onReset }) => {
    selectedBerries
    const options = berries.map(berry => {
        return {
            picture: berry.Picture,
            name: berry.Name
        }
    });

    return (
        <InputGroup>
            <Typeahead
                id="berry-search"
                labelKey="name"
                options={options}
                onChange={onChange}
                selected={}
                placeholder="Search for a berry..."
                multiple
                renderMenuItemChildren={(option, props) => (
                    <div>
                        <img 
                            src={option.Picture} 
                            alt={option.Name} 
                            style={{
                                height: '24px',
                                marginRight: '10px',
                                width: '24px',
                            }}
                        />
                        {option.Name}
                    </div>
                )}
            />
            <Button variant="outline-secondary" onClick={onReset}>Reset</Button>
        </InputGroup>
    );
};
