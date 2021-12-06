import React from "react";

class Curriculum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="curriculum-container">
        <header>
          <h1 className="name">
            {this.props.personalInfo.firstname}{" "}
            {this.props.personalInfo.lastname}{" "}
          </h1>
        </header>
        <div id="content">
          <main>
            <div id="cv-aboutMe">
              <h3>About me: {this.props.personalInfo.about} </h3>
            </div>
            <div id="cv-educationInfo">
              <h3>Education</h3>
              {this.props.educationForms.map((form) => {
                return (
                  <div>
                    <h4>University:{form.university}</h4>
                    <h5>
                      Dates:{form.from}-{form.to}
                    </h5>
                    <h5>City:{form.city}</h5>
                    <h5>Degree:{form.degree}</h5>
                    <hr></hr>
                  </div>
                );
              })}
            </div>
            <div id="cv-laboralInfo">
              <h3>Laboral Experience</h3>
              {this.props.laboralForms.map((form) => {
                return (
                  <div>
                    <h4>position:{form.position}</h4>
                    <h5>company:{form.company}</h5>

                    <h5>
                      dates:{form.from}-{form.to}
                    </h5>
                    <h5>jobDescription:{form.jobDescription}</h5>
                    <hr></hr>
                  </div>
                );
              })}
            </div>
          </main>
          <aside>
            <div id="cv-personalInfo">
              <h3>Personal Info:</h3>
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
