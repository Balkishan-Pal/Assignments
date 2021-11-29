import axios from "axios";
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { loginError, loginLoading, loginSucess } from "../redux/auth/action";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const handleLogin = async () => {
    dispatch(loginLoading());
    const payload = {
      email: email,
      password: pass,
    };
    try {
      const { data } = await axios.post("https://reqres.in/api/login", payload);
      dispatch(loginSucess(data.token));
      //  <Redirect/>
    } catch (err) {
      dispatch(loginError());
    }
  };
  const store = useSelector((store) => store.auth);
  if (store.token) {
    return <Redirect to="/"></Redirect>;
  } else {
    return (
      <div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          value={email}
          type="text"
        />
        <input
          type="password"
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
          value={pass}
        />
        <button onClick={() => handleLogin()}>Login</button>
      </div>
    );
  }
};