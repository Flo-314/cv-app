import React from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationInfo from "./components/EducationInfo";
import LaboralInfo from "./components/LaboralInfo";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <h1>Curriculum Generator!</h1>
        </header>
        <main>
          <div id="generator-container">
            <PersonalInfo />
            <EducationInfo />
            <LaboralInfo />
          </div>
          <div id="prev-container"></div>
        </main>
      </div>
    );
  }
}

export default App;
