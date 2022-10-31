import Dropdown from 'react-bootstrap/Dropdown';

function Appp() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="Schools" id="Schools">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/School Name 1">School Name 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">School Name 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">School Name 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default App;