import React, { useRef } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {setUserSlice } from '../store/slices/user.slice'
import "./custom.scss";
import ColorModeToggle from "../components/ColorModeToggle";

const HomePageTube = () => {

    const inputUser = useRef();
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleUser = e => {
      e.preventDefault()
      dispatch(setUserSlice (inputUser.current.value.trim()))
      navigate('/tubePage')
    }



  return (
    <div className="fondo">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand" href="#">
            <img
              src="./img/klipartz.com.png"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            <span className="title mx-3 fw-bold">ARESTUBE</span>
          </a>
        </div>
      </nav>
      <div className="container mt-5 fondoForm">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleUser}>
              <h1 className="sign h3 mb-3 fw-bold text-center">Sign in</h1>
              <div className="form-floating mb-3">
                <input
                  ref={inputUser}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">User Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  ref={inputUser}
                  type="email"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Email address</label>
              </div>
              <button className="btn btn-lg btn-primary w-100" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
      <ColorModeToggle />
    </div>
  );
};

export default HomePageTube;
