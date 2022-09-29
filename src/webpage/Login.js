import axios from 'axios';
import {useState} from 'react';
export default function Login() {
    let [Username,setUsername] = useState("");
    let [Password,setPassword] = useState("");
    function handleChange(value,set){set(value);}
    function userlogin(){
        axios.post('http://localhost:4000/login',{
            username:Username,password:Password
          }).then((res)=>{
            console.log(res);
            if(res.data==="success"){window.location.replace("http://localhost:3000/dashboard");}
            else{window.alert("login fail");}
            
          })
          .catch((error)=>{
            console.log(error)
          })
    }
    return (
        <div className="Auth-form-container">
        
        <form className="Auth-form" onSubmit={userlogin}>
        <img className="logologin" alt="logologin" src="logo-step2.png"></img>
        
            <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="mb-3">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Username"
                        onChange={e => handleChange(e.target.value, setUsername)}
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={e => handleChange(e.target.value, setPassword)}
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                        Remember me
                        </label>
                    </div>
                    </div>
                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    </div>
                    <p className="forgot-password text-right">
                    Forgot <a href="forgot">password?</a>
                    </p>
            </div>
      </form>
    </div>
    );
  }