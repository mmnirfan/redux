import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";
import Aux from '../hoc/Auxi';

const Home = () => {
  return (
    <Aux>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    <strong className="brand-name"> My New ReactJs App </strong>
                  </h1>
                  <h2 className="my-3">
                    This is our First Web Developed ReactJS App
                  </h2>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={logo}
                    className="img-fluid animated"
                    alt="Commom img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Aux>
  );
};

export default Home;