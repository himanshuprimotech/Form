import axios from 'axios'
import React, {useState} from 'react'

const Register = () => {

  const[first,setFirst]=useState("")
  const[last,setLast]=useState("")
  const[user,setUser]=useState("")
  const[email,setEmail]=useState("")
  const[pass,setPass]=useState("")
  const[message,setMessage]=useState(false)
  

  const handleregister=()=>{
    axios({
      url:"https://fakestoreapi.com/users",
      method:"POST",
      data:{
        email:email,
        username:user,
        password:pass,
        name:{
            firstname:first,
            lastname:last
        }
      }
    }).then(res=>{
      // console.log(res);
      if(res.status===200){
        setMessage(true);
      }
    })
  }


  return (
    <>
      <section className="vh-100" style={{backgroundColor: "#eee"}}>
        {/* <h1>Register</h1> */}
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11 p-5">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="first" className="form-control" value={first} onChange={(e)=>{
                        setFirst(e.target.value);
                      }} />
                      <label className="form-label" >First Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="last" className="form-control" value={last} onChange={(e)=>{
                        setLast(e.target.value);
                      }} />
                      <label className="form-label" >Last Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="username" className="form-control" value={user} onChange={(e)=>{
                        setUser(e.target.value);
                      }} />
                      <label className="form-label" >UserName</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" value={email} onChange={(e)=>{
                        setEmail(e.target.value);
                      }} />
                      <label className="form-label">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" value={pass} onChange={(e)=>{
                        setPass(e.target.value);
                      }} />
                      <label className="form-label" >Password</label>
                    </div>
                  </div>
                  <div className="text-danger">
                  {message ? "User Created Successfully": null }
                  </div><br />
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" onClick={handleregister}>Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sampling" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Register
