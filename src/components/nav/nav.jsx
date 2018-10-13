import React from "react";
import "./nav.css";

const Nav = props => {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <ul className="navbar-nav navbar-expand-sm col-12 ">
        <li className="brand col-4 text-white mb-1 mt-1 text-left pl-5">
          <a
            href="https://jaepgh.github.io/clicky_game/"
            className="text-white"
          >
            <i className="far fa-grin-beam-sweat fa-3x te " />
          </a>
        </li>

        <li className="nav-item col-4 text-white mb-1 mt-1" id="message">
          <h4 className={props.messageAnimation}>{props.message}</h4>
        </li>
        <li className="nav-item text-white col-4 mb-1 mt-1" id="score">
          <h4>
            Current Score: {props.currentScore} | Top Score: {props.topScore}
          </h4>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
