import React from "react";

class LaboralInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h4>Laboral Experience</h4>

        <form>
          <input type="text" name="position" placeholder="Position"></input>
          <input type="text" name="company" placeholder="Company"></input>
          <input type="text" name="dates" placeholder="From x To x"></input>
          <input type="text" name="jobDescription" placeholder="Description of Job"></input>
        </form>
      </div>
    );
  }
}

export default LaboralInfo;
