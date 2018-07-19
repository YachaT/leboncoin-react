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
          {/* <li> */}
          <div className="headertabsleft">
            <NavLink to="/publish">
              <button className="headertab">DEPOSER UNE ANNONCE</button>
            </NavLink>
            <NavLink to="/">
              <button className="headertab">OFFRES</button>
            </NavLink>
          </div>
          <div className="headertabsright">
            <NavLink to={"/profile/" + this.props.user._id}>
              {this.props.user.username}
            </NavLink>
            {/* </li> */}
            {/* <li> */}
            <button className="signoutbutton" onClick={this.onLogOut}>
              Déconnexion
            </button>
          </div>
          {/* </li> */}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {/* <li className="borderstyling1"> */}
        <NavLink to="/sign_up" className="headerbutton borderstyling1">
          Créer un compte
        </NavLink>
        {/* </li> */}
        {/* <li className="borderstyling2"> */}
        <NavLink to="/log_in" className="headerbutton borderstyling2">
          Se connecter
        </NavLink>
        {/* </li> */}
      </React.Fragment>
    );
  }
  render() {
    let className;
    if (this.props.user._id) {
      className = "nav-list-connected";
    } else {
      className = "nav-list-disconnected";
    }
    return (
      <header className="headerstyle">
        <div className="container headerelements">
          <NavLink to="/">
            <img src="/images/logolbc.svg" />
          </NavLink>
          <div className={"nav-list " + className}>
            {/* <li /> */}
            {this.renderNav()}
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
