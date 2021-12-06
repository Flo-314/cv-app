import React from "react";

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="PersonalInfo-container">
        <form >
          <input type="text" name="firstname" placeholder="First Name"></input>
          <input type="text" name="lastname" placeholder="Last Name"></input>
          <input type="text" name="email" placeholder="Email"></input>
          <input type="text"  name="phonenumber" placeholder="Phone Number"></input>
          <input type="text" name="about" placeholder="About Me"></input>
        </form>
      </div>
    );
  }
}

export default PersonalInfo;
