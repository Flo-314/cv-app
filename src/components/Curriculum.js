import React from "react";

class Curriculum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="curriculum-container">
        <header></header>
        <div id="content">
          <main>
            <div id="cv-aboutMe">
              <h3>About me: {this.props.personalInfo.about} </h3>
            </div>
            <div id="cv-educationInfo">
              <h3>Education</h3>
            </div>
            <div id="cv-laboralInfo">
              <h3>Laboral Experience</h3>
            </div>
          </main>
          <aside>
            <div id="cv-personalInfo">
              <h3>
                Personal Info: {this.props.personalInfo.firstname}
              </h3>
              <h4>Adress: {this.props.personalInfo.lastname}</h4>
              <h4>Phone Number: {this.props.personalInfo.email}</h4>
              <h4>Email: {this.props.personalInfo.phonenumber}</h4>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default Curriculum;
