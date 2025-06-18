import { useState } from "react";

const Login = () => {
  const [isEmail, setEmail] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isSubmit, setSubmit] = useState(false);
  function setEmailValue(e) {
    setEmail(e.target.value);
  }
  function setPasswordValue(e) {
    setPassword(e.target.value);
  }
  function addValidation() {
    setSubmit(true);
  }
  return (
    <form>
      <input
        className="rounded border"
        type="email"
        value={isEmail}
        onChange={setEmailValue}
      />
      <p> The email is {isEmail}</p>

      <input
        className=" border rounded"
        type="password"
        value={isPassword}
        onChange={setPasswordValue}
      />
      <p>The password is {isPassword}</p>
      <button value={isSubmit} onClick={addValidation}>
        Submit
      </button>
    </form>
  );
};
export default Login;
