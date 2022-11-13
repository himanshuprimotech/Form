import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Login = (props) => {


  const{token,settoken}=props;
  const[error,setError]=useState(false)
  const[user,setUser]=useState("");
  const[pass,setPass]=useState("");
  // console.log("helo", user);
  const[allEntry, setAllentry]=useState([])


  const clickhandle=(e)=>{
    axios({
        url:"https://fakestoreapi.com/auth/login",
        method:'POST',
        data:{
          username: user,
          password: pass,
        }
    }).then(res=>{
      console.log(res.data.token);
      localStorage.setItem("usertoken", res.data.token );
      settoken(res.data.token);
      console.log(settoken)
    }).catch(err=>{
      console.log(err);
      setError(true);
    })
    e.preventDefault();
    const newEntry={username:user, passwrod:pass}
    setAllentry([...allEntry, newEntry]);
    console.log(allEntry);
  }




  return (
    <>
      <section className="vh-100 pt-3">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                {/* <!-- Email input --> */}
                <h1 className="mb-4">Login Form</h1>
                <div className="form-outline mb-4 align-items-center">
                  <input
                    type="email"
                    id="username"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    name="username"
                    onChange={(e)=>{
                      setUser(e.target.value);
                    }}
                  />
                  <label className="form-label" >
                    Username
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    onChange={(e)=>{
                      setPass(e.target.value);
                    }}
                  />
                  <label className="form-label">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" >
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <div className="text-danger">
                    {error ? "Username or Password is incorrect" : null }
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={clickhandle}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/register" className="link-danger">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- Right --> */}
      </section>
    </>
  );
};

export default Login;
