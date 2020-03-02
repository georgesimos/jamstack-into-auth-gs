import React from "react";
import { useIdentityContext } from "react-netlify-identity-widget";
import { navigate } from "gatsby";

const RouteLogin = ({ showModal }) => {
  const identity = useIdentityContext();
  console.log(identity);

  if (identity && identity.isLoggedIn) {
    navigate("/dashboard/secret", { replace: true });
  }
  return (
    <>
      <h1>Log In or Sign Up</h1>
      <button onClick={showModal}>Login</button>
    </>
  );
};

export default RouteLogin;
