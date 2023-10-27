import React, { useState } from "react";
import axios from "axios";
const SignUpPage = () => {
  const initial = {
    username: "",
    email: "",
    pass: "",
  };

  const [form, setForm] = useState(initial);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://super-cuff-links-colt.cyclic.app/users/register", form)
      .then((res) => {
        alert(res.data.msg);
        console.log(res.data);
      });

    setForm(initial);
  };

  const { username, email, pass } = form;

  return (
    <div>
      
     
      <h1>Sign-Up Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={username}
          placeholder="Enter Your Username"
        />
        <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <br />

        <input
          type="password"
          onChange={handleChange}
          value={pass}
          name="pass"
          placeholder="Enter Your Password"
        />
        <br />

        <input type="submit" value="SUBMIT" />
      </form>

    </div>
  );
};

export default SignUpPage;
