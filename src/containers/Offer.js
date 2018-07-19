import React from "react";
import axios from "axios";

class Offer extends React.Component {
  state = {
    item_id: {}
  };

  render() {
    return (
      <div className="itemdetail">
        <div className="blockoffer">
          <div className="itemleft">
            <div className="maincontent">
              <img src="/images/placeholder.jpg" alt="placeholder" />
              <div className="titleandprice">
                <p className="detailtitle">{this.state.item_id.title}</p>
                <p className="detailprice">{this.state.item_id.price} $</p>
              </div>
            </div>
            <p className="description">Description</p>

            <p>{this.state.item_id.description}</p>
          </div>

          <div className="profilebox">
            <div className="picandname">
              <i class="fas fa-user-circle profilepic" />
              <p>Username</p>
            </div>
            <button className="phonebutton">
              <i class="fas fa-phone" />
              Voir le numero
            </button>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    axios
      .get(
        " https://leboncoin-api.herokuapp.com/api/offer/" +
          this.props.match.params.id
      )
      .then(response => {
        console.log(response.data);
        this.setState({ item_id: response.data });
      });
  }
}

export default Offer;
