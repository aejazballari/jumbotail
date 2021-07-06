import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const onClicked = () => {};

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <label htmlFor="user">Username</label>
      <input name="user" type="text" value={user} onChange={handleUser} />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        value={password}
        onChange={handlePassword}
      />
      <button onClick={onClicked}>login</button>
    </div>
  );
};

export default Login;
