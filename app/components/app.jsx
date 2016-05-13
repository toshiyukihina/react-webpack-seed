import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("clicked!");
  }

  render() {
    const buttons = () => {
      return ["primary", "success", "info", "warning", "danger"].map((style) => {
        return (<Button key={style} bsStyle={style} onClick={this.handleClick}>{style}</Button>);
      });
    };

    return (
      <div>
        <ButtonToolbar>
          {buttons()}
        </ButtonToolbar>
      </div>
    );
  }
  
}

export default App;
