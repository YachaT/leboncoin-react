import React from "react";
import axios from "axios";

class LogIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    axios
      .post("https://leboncoin-api.herokuapp.com/api/user/log_in", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        if (response.data && response.data.token) {
          this.props.setUser({
            token: response.data.token,
            username: response.data.account.username,
            _id: response.data._id
          });

          this.props.history.push("/");
        }
      })
      .catch(err => {
        console.log(err);
      });
    event.preventDefault();
  };

  onClick = event => {
    this.props.history.push("/sign_up");
  };

  render() {
    return (
      <form
        className="container block2 form form-signup"
        onSubmit={this.onSubmit}
      >
        <h3 className="formheadstyle">Connexion</h3>

        <div className="inputitem">
          <label htmlFor="email">Adresse email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>

        <div className="inputitem">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="signupbutton">
          Se connecter
        </button>

        {/* <div>
          <hr />
        </div> */}
        <div className="noaccount">
          <p>Vous n'avez pas de compte?</p>
        </div>
        <button type="submit" className="createaccount" onClick={this.onClick}>
          creer un compte
        </button>
      </form>
    );
  }
}

export default LogIn;
