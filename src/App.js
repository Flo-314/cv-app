import React from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationInfo from "./components/EducationInfo";
import LaboralInfo from "./components/LaboralInfo";
import uniqid from "uniqid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {},
      educationForms: [],
      laboralForms: [],
    };

    this.createEducationForm = this.createEducationForm.bind(this);
    this.createLaboralForm = this.createLaboralForm.bind(this);

    this.handleEducationInput = this.handleEducationInput.bind(this);
    this.handleLaboralInput = this.handleLaboralInput.bind(this);
  }

  createEducationForm = () => {
    let educationForm = {
      id: uniqid("id"),
      university: "",
      dates: "",
      city: "",
      degree: "",
    };
    this.setState({
      educationForms: [...this.state.educationForms, educationForm],
    });
  };
  createLaboralForm = () => {
    let laboralForm = {
      id: uniqid("id"),
      position: "",
      company: "",
      dates: "",
      jobDescription: "",
    };
    this.setState({
      laboralForms: [...this.state.laboralForms, laboralForm],
    });
  };

  handleEducationInput(event, id) {
    const filterID = (e) => e.id === id;
    const index = this.state.educationForms.findIndex(filterID);

    const target = event.target;
    const value = target.value;
    const name = target.name;

    let educationForms = [...this.state.educationForms];
    educationForms[index][name] = value;
    this.setState({ educationForms });
  }

  handleLaboralInput(event, id) {
    const filterID = (e) => e.id === id;
    const index = this.state.laboralForms.findIndex(filterID);

    const target = event.target;
    const value = target.value;
    const name = target.name;

    let laboralForms = [...this.state.laboralForms];
    laboralForms[index][name] = value;
    this.setState({ laboralForms });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Curriculum Generator!</h1>
        </header>
        <main>
          <div id="generator-container">
            <h4>Personal Info</h4>
            <PersonalInfo />
            <h4>Education Info</h4>
            <EducationInfo
              forms={this.state.educationForms}
              inputHandler={this.handleEducationInput}
            />
            <button
              id="educationBtn"
              onClick={() => this.createEducationForm()}
            >
              Add
            </button>
            <h4>Laboral Info </h4>
            <LaboralInfo
              forms={this.state.laboralForms}
              inputHandler={this.handleLaboralInput}
            />
            <button id="laboralBtn" onClick={() => this.createLaboralForm()}>
              Add
            </button>
          </div>
          <div id="prev-container"></div>
        </main>
      </div>
    );
  }
}

export default App;
