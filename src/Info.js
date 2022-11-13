import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Info = () => {
    const navigate = useNavigate();
    const[info,setInfo]=useState({
        name:{
            firstname:"",
            lastname:"",
        },
        address:{
            city:"",
            state:"",
            zipcode:"",
        },
        email:"",
        username:"",
        phone:"",
    })
    const url="https://fakestoreapi.com/users/1"
    const data=async(api)=>{
    const res= await axios.get(api);
    // console.log("hello", res.data);
    setInfo(res.data);
    }
    useEffect(()=>{
        data(url);
        localStorage.removeItem("usertoken")
    },[])

    const logout=()=>{
        // localStorage.clear();
        navigate('/');
        console.log("logout");
    }
  return (
    <>
      <h1>Information</h1>
      <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt='imaging'/><span className="font-weight-bold">{info.name.firstname} {info.name.lastname}</span><span className="text-black-50">{info.email}</span><span> </span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Firstname</label><input type="text" className="form-control" placeholder={info.name.firstname} value="" disabled /></div>
                    <div className="col-md-6"><label className="labels">Lastname</label><input type="text" className="form-control" value="" placeholder={info.name.lastname}  disabled/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Mobile Number</label>
                    <input type="text" className="form-control" placeholder={info.phone} disabled /></div>
                    <div className="col-md-12"><label className="labels">city</label>
                    <input type="text" className="form-control" placeholder={info.address.city}  disabled /></div>
                    <div className="col-md-12"><label className="labels">Street</label>
                    <input type="text" className="form-control" placeholder={info.address.street}  disabled /></div>
                    <div className="col-md-12"><label className="labels">Postcode</label>
                    <input type="text" className="form-control" placeholder={info.address.zipcode}  disabled /></div>
                    <div className="col-md-12"><label className="labels">Email ID</label>
                    <input type="text" className="form-control" placeholder={info.email} disabled /></div>
                    <div className="col-md-12"><label className="labels">phone</label>
                    <input type="text" className="form-control" placeholder={info.phone} disabled /></div>
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={logout}>Logout</button></div>
            </div>
        </div>
    </div>
</div>
{/* </div>
</div> */}
    </>
  )
};

export default Info
