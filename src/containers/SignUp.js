import React from "react";
import axios from "axios";

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    username: ""
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    /* const value = target.type === "checkbox" ? target.checked : target.value; */
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    axios
      .post("https://leboncoin-api.herokuapp.com/api/user/sign_up", {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      })
      .then(response => {
        // console.log(response.data);
        // {
        //   account: { username: "Farid" },
        //   token: "Ii0HYfXTN7L2SMoL",
        //   _id: "5b4ceb668c2a9a001440b2fb"
        // };

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

  render() {
    return (
      <div className="container block">
        <div className="infoaccount">
          <h3>Pourquoi créer un compte?</h3>
          <div className="infoitem">
            <div className="divimage">
              <i class="far fa-clock" />
            </div>
            <div className="infotext">
              <h4>Gagnez du temps</h4>
              <p>
                Publiez vos annonces rapidement, avec vos informations
                pré-remplies chaque fois que vous souhaitez déposer une nouvelle
                annonce.
              </p>
            </div>
          </div>

          <div className="infoitem">
            <div className="divimage">
              <i class="fas fa-bell" />
            </div>
            <div className="infotext">
              <h4>Soyez les premiers informés</h4>
              <p>
                Créez des alertes Immo ou Emploi et ne manquez jamais l'annonce
                qui vous interesse.
              </p>
            </div>
          </div>

          <div className="infoitem">
            <div className="divimage">
              <i class="fas fa-eye" />
            </div>
            <div className="infotext">
              <h4>Visibilité</h4>
              <p>
                Suivez les statistiques de vos annonces (nombre de fois où votre
                annonce a été vue, nombre de contacts reçus).
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={this.onSubmit} className="form form-signup">
          <h3 className="formheadstyle">Créez un compte</h3>
          <div className="inputitem">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              className="hello"
            />
          </div>
          <div className="inputitem">
            <label htmlFor="password">password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="inputitem">
            <label htmlFor="username">username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <input
            className="signupbutton"
            type="submit"
            value="Créer mon compte"
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
