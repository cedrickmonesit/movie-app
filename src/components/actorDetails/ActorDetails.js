import React from "react";
import { connect } from "react-redux";

import { fetchActor } from "../../actions";
import "./actorDetails.scss";

class ActorDetails extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const id = this.props.match.params.id;
    this.props.fetchActor(id);
    console.log(id);
  }

  //birthday date filtering from year-month-day to month/day/year and age
  renderBirthday(birthday) {
    if (birthday) {
      const date = birthday.split("-");
      const year = date[0];
      const month = date[1];
      const day = date[2];
      const age = new Date().getFullYear() - year;
      return `${month}/${day}/${year} | ${age} yo`;
    }
    return null;
  }

  renderDetails = () => {
    return (
      <div className="actor-details">
        <header
          className="actor-details-header"
          style={{
            background: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%), rgb(255, 255, 255)`,
          }}
        >
          <div className="actor-details-header-info-container">
            <img
              className="actor-details-poster"
              src={`http://image.tmdb.org/t/p/w500/${this.props.actor.profile_path}`}
              alt={this.props.actor.title}
            />
            <div className="actor-details-title">
              <h1>{this.props.actor.name}</h1>
              <p></p>
              <p>{this.renderBirthday(this.props.actor.birthday)}</p>
              <p className="actor-details-summary-genres">
                {this.props.actor.place_of_birth}
              </p>
            </div>
          </div>
        </header>
        <main className="actor-details-main">
          <div className="actor-details-summary">
            <h2>Biography</h2>
            <p>{this.props.actor.biography}</p>
          </div>
        </main>
      </div>
    );
  };

  render() {
    console.log(this.props, "actor");
    return <React.Fragment>{this.renderDetails()}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    actor: state.actorData,
  };
};

export default connect(mapStateToProps, {
  fetchActor,
})(ActorDetails);
