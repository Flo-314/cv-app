import React from "react";

class EducationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div id="educationInfo-container">
        {this.props.forms.map((form) => {
          return (
            <form key={form.id}>
              <input
                type="text"
                name="university"
                placeholder="University"
                onChange={(e) => this.props.inputHandler(e, form.id)}
              ></input>
              <input
                type="date"
                name="from"
                placeholder="From X"
                onChange={(e) => this.props.inputHandler(e, form.id)}
              ></input>
              <input
                type="date"
                name="to"
                placeholder="To Y "
                onChange={(e) => this.props.inputHandler(e, form.id)}
              ></input>
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={(e) => this.props.inputHandler(e, form.id)}
              ></input>
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                onChange={(e) => this.props.inputHandler(e, form.id)}
              ></input>
              <button type="button" className="deleteBtn" onClick={() =>{this.props.deleteListener(form.id)}}>Delete Degree</button>
            </form>
           
          );
        })}
      </div>
    );
  }
}

export default EducationInfo;
