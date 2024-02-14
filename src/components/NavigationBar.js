import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <h1 className="navbar-brand nav-item display-6">
          Cryptography and Networking
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/cryptography-networking-study-app/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Key Terms
              </a>
              <div
                className="dropdown-menu mt-2"
                aria-labelledby="navbarDropdown"
              >
                <Link className="dropdown-item" to="cryptography-networking-study-app/chapter/1">
                  Chapter 1
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Flash Cards
              </a>
              <div
                className="dropdown-menu mt-2"
                aria-labelledby="navbarDropdown"
              >
                <Link className="dropdown-item" to="cryptography-networking-study-app/chapter/1/flashcards">
                  Chapter 1
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Multiple Choice Quiz
              </a>
              <div
                className="dropdown-menu mt-2"
                aria-labelledby="navbarDropdown"
              >
                <Link className="dropdown-item" to="cryptography-networking-study-app/chapter/1/multiplechoicequiz">
                  Chapter 1
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
