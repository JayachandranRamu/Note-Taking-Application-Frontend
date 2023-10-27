import axios from 'axios';
import React, { useState } from 'react'

const LoginPage = () => {
    const initial = {
        email:"",
        pass: "",
      };
    
      const [form,setForm]=useState(initial);
    
      const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})

      }
    
      const handleSubmit=(e)=>{
        e.preventDefault();
            if(form.pass.length==0 || form.email.length==0){
                alert("Fill Your Login Form Properly!")
            }else{
              axios.post("https://super-cuff-links-colt.cyclic.app/users/login",form).then(res=>{alert(res.data.msg)
              localStorage.setItem("token",res.data.token)
              });
                setForm(initial);
            }
      }
    
      const {pass,email}=form;
    
      return (
        <div>
          <h1>Login Form</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange}  value={email}/>
            <br />
            <input type="password" onChange={handleChange}  value={pass} name="pass" placeholder="Enter Your Password" />
            <br />
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
      );
}

export default LoginPage