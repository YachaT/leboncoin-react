import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    items: []
  };

  render() {
    const items = [];
    for (let i = 0; i < this.state.items.length; i++) {
      /*
      items.push(
        <div>
          <li>{this.state.items[i].title}</li>
          <li>{this.state.items[i].price + " $"}</li>
        </div>
      );
      */
      if (this.state.items[i].price) {
        items.push(
          <li className="itemunit">
            <Link className="item" to={"/offer/" + this.state.items[i]._id}>
              <img src="/images/placeholder.jpg" alt="placeholder" />
              <div className="iteminfo">
                <p className="itemtitle">{this.state.items[i].title}</p>

                <p className="itemprice">{this.state.items[i].price} $</p>
              </div>
            </Link>
          </li>
        );
      }
    }
    return (
      <div>
        <ul className="itemblock">{items}</ul>
      </div>
    );
  }
  componentDidMount() {
    axios
      .get(" https://leboncoin-api.herokuapp.com/api/offer")
      .then(response => {
        this.setState({ items: response.data });
      });
  }
}

export default Home;
