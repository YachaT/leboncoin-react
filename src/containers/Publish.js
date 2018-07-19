import React from "react";
import axios from "axios";

class Publish extends React.Component {
  state = {
    title: "",
    description: "",
    price: ""
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
    var config = {
      headers: { Authorization: "bearer " + this.props.user.token }
    };
    var bodyParameters = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price
    };
    axios
      .post(
        "https://leboncoin-api.herokuapp.com/api/offer/publish",
        bodyParameters,
        config
      )
      .then(response => {
        console.log(response.data);
        this.props.history.push("/");
      });
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form className="form-publish" onSubmit={this.onSubmit}>
          <div className="headerpublish ">
            <h3>Votre annonce</h3>
          </div>
          <div className="inputfields">
            <div className="inputfielditem">
              <label htmlFor="title">Titre de l'annonce</label>
              <input
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div className="inputfielditem">
              <label htmlFor="description">Texte de l'annonce</label>
              <textarea
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>

            <div className="inputfielditem">
              <label htmlFor="price">Prix</label>
              <input
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </div>
            <button className="publishbuttonvalidate">Valider</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Publish;
