import React from "react";
import uniqid from "uniqid";

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
          <section>
            <div id="cv-educationInfo">
              <h3>Education:</h3>
              <hr></hr>

              {this.props.educationForms.map((form) => {
                return (
                  <div key={uniqid("argentina")}>
                    <h4>University:{form.university}</h4>
                    <h4>
                    From: {form.from} To {form.to}
                    </h4>
                    <h4>City: {form.city}</h4>
                    <h4>Degree: {form.degree}</h4>
                    <hr></hr>
                  </div>
                );
              })}
            </div>
            <div id="cv-laboralInfo">
              <h3>Laboral Experience:</h3>
              <hr></hr>
              {this.props.laboralForms.map((form) => {
                return (
                  <div key={uniqid("argentina")}>
                    <h4>Position: {form.position}</h4>
                    <h4>Company: {form.company}</h4>

                    <h4>
                      From: {form.from} To {form.to}
                    </h4>
                    <h4>Job Description: {form.jobDescription}</h4>
                    <hr></hr>
                  </div>
                );
              })}
            </div>
          </section>
          <aside>
            <div id="cv-personalInfo" key={uniqid("argentina")}>
              <h3>Personal Info:</h3>
              <h4>Adress: {this.props.personalInfo.lastname}</h4>
              <h4>Email: {this.props.personalInfo.email}</h4>
              <h4>Phone Number: {this.props.personalInfo.phonenumber}</h4>
              <hr></hr>
              <h4> About me: {this.props.personalInfo.about} </h4>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default Curriculum;
