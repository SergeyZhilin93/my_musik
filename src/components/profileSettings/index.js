import React from "react";

export class ProfileSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "profile"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert(`Редирект на страницу: `+ this.state.value)
    event.preventDefault()
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя пользователя
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="profile">Profile</option>
            <option value="settings">Settings</option>
            <option value="notifications">Notifications</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}