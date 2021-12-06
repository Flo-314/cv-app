import React from "react";

class LaboralInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(props) {
    return (
      <div>
        {this.props.forms.map((form) => {
          return (
            <form key={form.id}>
            <input type="text" name="position" placeholder="Position" onChange={ e => this.props.inputHandler(e, form.id) }></input>
              <input type="text" name="company" placeholder="Company" onChange={ e => this.props.inputHandler(e, form.id) }></input>
              <input type="text" name="dates" placeholder="From x To x" onChange={ e => this.props.inputHandler(e, form.id) }></input>
              <input type="text" name="jobDescription" placeholder="Description of Job" onChange={ e => this.props.inputHandler(e, form.id) } ></input>
            </form>
          );
        })}
      </div>
    );
  }
}

export default LaboralInfo;
