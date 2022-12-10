import React, { useState } from "react";
import "./RegisterForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

function RegisterForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };
  const RegisterSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    <div>
      <form id="loginform" onSubmit={RegisterSubmit}>
        <div className="form">
          <div className="form-body">
            <div className="username">
              <label className="form__label" for="firstName">
                First Name{" "}
              </label>
              <input
                className="form__input"
                type="text"
                id="firstName"
                placeholder="Enter First Name"
              />
            </div>
            <div className="lastname">
              <label className="form__label" for="lastName">
                Last Name{" "}
              </label>
              <input
                type="text"
                name=""
                id="lastName"
                className="form__input"
                placeholder="Enter LastName"
              />
            </div>
            <div className="email">
              <label className="form__label" for="email">
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                className="form__input"
                placeholder="Enter Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="password">
              <label className="form__label" for="password">
                Password{" "}
              </label>
              <input
                className="form__input"
                type="password"
                id="password"
                placeholder="Enter Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="confirm-password">
              <label className="form__label" for="confirmPassword">
                Confirm Password{" "}
              </label>
              <input
                className="form__input"
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <div className="confirm-password">
              <label className="form__label" for="securitQuestion">
                Security Question{" "}
              </label>
              <input
                className="form__input"
                type="text"
                id="SecurityQuestion"
                placeholder=" Security Question"
              />
            </div>
            <div className="confirm-password">
              <label className="form__label" for="SecurityAnswer">
                Security Answer{" "}
              </label>
              <input
                className="form__input"
                type="text"
                id="SecurityAnswer"
                placeholder=" Security Answer"
              />
            </div>
          </div>
          <div class="footer">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
