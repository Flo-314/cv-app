import React from "react";

class EducationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div>
           {    this.props.forms.map((form) =>{
                return(

        <form key={form.id}>
        <input type="text" name="university" placeholder="University" onChange={ e => this.props.inputHandler(e, form.id) }></input>
        <input type="text" name="dates" placeholder="From X To X "  onChange={ e => this.props.inputHandler(e, form.id) } ></input>
        <input type="text" name="city" placeholder="City" onChange={ e => this.props.inputHandler(e, form.id) }></input>
        <input type="text" name="degree" placeholder="Degree" onChange={ e => this.props.inputHandler(e, form.id) }></input>
      </form>
                )
              })}


      </div>
    );
  }
}

export default EducationInfo;
