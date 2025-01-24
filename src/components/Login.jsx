import React, { useState } from 'react';
import "../styles/loginmember.css";
import logopic from "../assets/logo-rm.png";
import { useNavigate, useLocation } from 'react-router';
import { db } from '../firebase-config';
import { doc, getDoc } from 'firebase/firestore';

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Get the target path from the state or default to home
  const target = location.state?.target || "/home";

  const handleLogin = async (e) => {
    e.preventDefault();

    const docRef = doc(db, "users", `${userName}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const passwordDb = docSnap.data().password;
      if (passwordDb === password) {
        navigate(target); // Redirect to the intended page
      } else {
        setShowAlert(true); // Show invalid password alert
      }
    } else {
      setShowAlert(true); // Show user not found alert
    }
  };

  return (
    <>
      <section id="login-member" style={{ position: "relative" }}>
        {showAlert && (
          <div
            id="alert-login-wrong"
            style={{ maxWidth: "300px", display: "block", margin: "auto" }}
            className="alert alert-danger"
            role="alert"
          >
            Invalid username or password.
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => setShowAlert(false)} // Close the alert
            ></button>
          </div>
        )}

        <div className="container">
          <div className="row">
            <div className="logo-box d-flex justify-content-center">
              <img
                src={logopic}
                alt="logo here"
                className="img-fluid logo-img-login"
              />
            </div>
            <h3 className="text-center login-heading">LOGIN</h3>
            <div className="col-12 test">
              <div className="box d-flex justify-content-center align-items-center">
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="exampleUsername" className="form-label">
                      Username:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setUserName(e.target.value)}
                      id="exampleUsername"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      id="exampleInputPassword1"
                    />
                  </div>

                  <div className="login-btn-box d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary login-btn-client"
                    >
                      LOGIN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
