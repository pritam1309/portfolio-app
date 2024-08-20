import React from "react";

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-primary">
          <div className="container-fluid mx-3">
            <a className="navbar-brand"  href="/">Portfolio.</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="box1">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link"  id="link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="link" href="/">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="link" href="/">Skill</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="link" href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
            </div>
        </nav>
          );
        };

