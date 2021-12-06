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
        <div id="cv-aboutMe"><h3>About me</h3></div>
        <div id="cv-educationInfo"><h3>Education</h3></div>
        <div id="cv-laboralInfo"><h3>Laboral Experience</h3></div>

          </main>
          <aside>
              <div id="cv-personalInfo">
                  <h3>Personal Info</h3>
                  <ul>
                      
                  </ul>
              </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default Curriculum;
