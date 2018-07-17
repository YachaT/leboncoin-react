import React from "react";
import { NavLink, withRouter } from "react-router-dom";

class Header extends React.Component {
  onLogOut = event => {
    this.props.logOut();
    this.props.history.push("/");
    event.preventDefault();
  };
  renderNav() {
    if (this.props.user._id) {
      return (
        <React.Fragment>
          <li>
            <NavLink to={"/profile/" + this.props.user._id}>
              {this.props.user.username}
            </NavLink>
          </li>
          <li>
            <button onClick={this.onLogOut}>Déconnexion</button>
          </li>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <li className="borderstyling1">
          <NavLink to="/sign_up" className="headerbutton">
            Créer un compte
          </NavLink>
        </li>
        <li className="borderstyling2">
          <NavLink to="/log_in" className="headerbutton">
            Se connecter
          </NavLink>
        </li>
      </React.Fragment>
    );
  }
  render() {
    return (
      <header className="headerstyle">
        <div className="container headerelements">
          <img src="./images/logolbc.svg" />
          <ul className="nav-list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {this.renderNav()}
          </ul>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
