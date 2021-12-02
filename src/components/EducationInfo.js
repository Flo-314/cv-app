import React from "react";

class EducationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h4>Education Information</h4>

        <form>
          <input type="text" name="university" placeholder="University"></input>
          <input type="text" name="dates" placeholder="From X To X"></input>
          <input type="text" name="city" placeholder="City"></input>
          <input type="text" name="degree" placeholder="Degree"></input>
        </form>
      </div>
    );
  }
}

export default EducationInfo;
