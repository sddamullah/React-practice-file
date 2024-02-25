import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-secondary">
      <div className="container">
        <a className="text-decoration-none text-white h5">{props.title}</a>
        <a className="text-decoration-none text-white h5">Home</a>
        <a className="text-decoration-none text-white h5">{props.abouttext}</a>
        <a className="text-decoration-none text-white h5">Contact</a>

        <form className=" input-group w-auto">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
        </form>
      </div>
    </nav>
  );
}
Navbar.Prototypes = {
  title: PropTypes.string,
  abouttext: PropTypes.string,
};
Navbar.defaultProps = {
  title: "missing title",
  abouttext: "missing about text",
};
