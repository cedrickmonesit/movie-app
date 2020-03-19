import React from "react";
import { connect } from "react-redux";

import { fetchActor, fetchActorMovies } from "../../actions";
import "./actorDetails.scss";
import cinema from "../../images/cinema.jpg";
import MovieList from "../movielist/MovieList";

class ActorDetails extends React.Component {
  componentDidMount() {
    this.fetchData();
    window.scrollTo(0, 0);
  }

  fetchData() {
    const id = this.props.match.params.id;
    this.props.fetchActor(id);
    this.props.fetchActorMovies(id);
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

  renderGender(gender) {
    const male = 2;
    const female = 1;
    if (gender === male) {
      return "Male";
    } else if (gender === female) {
      return "Female";
    }
  }

  renderJob(job, gender) {
    if (job === "Acting" && gender) {
      if (gender === 1) {
        return "Actress";
      } else if (gender === 2) {
        return "Actor";
      }
    } else {
      return job;
    }
  }

  renderBiography(biography) {
    if (biography) {
      return (
        <div className="actor-details-summary">
          <h2>Biography</h2>
          <p>{biography}</p>
        </div>
      );
    }
    return null;
  }

  renderDetails = () => {
    return (
      <div className="actor-details">
        <header
          className="actor-details-header"
          style={{
            background: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%), url(${cinema}) 20% 20%/cover no-repeat border-box, rgb(255, 255, 255)`,
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
              <p>
                {`${this.renderGender(this.props.actor.gender)} 
                | 
                ${this.renderJob(
                  this.props.actor.known_for_department,
                  this.props.actor.gender,
                )}`}
              </p>
              <p>{this.renderBirthday(this.props.actor.birthday)}</p>
              <p className="actor-details-summary-genres">
                {this.props.actor.place_of_birth}
              </p>
            </div>
          </div>
        </header>
        <main className="actor-details-main">
          {this.renderBiography(this.props.actor.biography)}
          <div className="actor-details-main-popular-roles">
            <h2>Popular Roles</h2>
            <MovieList movies={this.props.movies} />
          </div>
        </main>
      </div>
    );
  };

  render() {
    console.log(this.props, "actor details props");
    return <React.Fragment>{this.renderDetails()}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    actor: state.actorData,
    movies: state.actorMoviesData.cast,
  };
};

export default connect(mapStateToProps, {
  fetchActor,
  fetchActorMovies,
})(ActorDetails);
