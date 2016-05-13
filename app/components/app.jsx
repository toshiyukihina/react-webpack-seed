import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

class App extends React.Component {

  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button>Defaulr</Button>
          <Button bsStyle="primary">Primary</Button>
          <Button bsStyle="success">Success</Button>
          <Button bsStyle="info">Info</Button>
          <Button bsStyle="warning">Warning</Button>
          <Button bsStyle="danger">Danger</Button>
        </ButtonToolbar>
      </div>
    );
  }
  
}

export default App;
