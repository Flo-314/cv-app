import React from "react";

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(props) {
    return (
      <div id="PersonalInfo-container">
        <form key={this.props.form.id} >
          <input type="text" name="firstname" placeholder="First Name" onChange={ e => this.props.inputHandler(e) }></input>
          <input type="text" name="lastname" placeholder="Last Name" onChange={ e => this.props.inputHandler(e) }></input>
          <input type="text" name="email" placeholder="Email" onChange={ e => this.props.inputHandler(e) }></input>
          <input type="text"  name="phonenumber" placeholder="Phone Number" onChange={ e => this.props.inputHandler(e) }></input>
          <input type="text" name="about" placeholder="About Me"  onChange={ e => this.props.inputHandler(e) } ></input>
        </form>
      </div>
    );
  }
}

export default PersonalInfo;
