import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
          <header>
            <h1>Curriculum Generator!</h1>
          </header>
          <main>
            <div id="generator-container"></div>
            <div id="prev-container"></div>
          </main>
      </div>
    );
  }
}
 
export default App;

