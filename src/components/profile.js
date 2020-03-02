import React from "react";
import { Link } from "gatsby";
import { useIdentityContext } from "react-netlify-identity";

const Profile = ({ showModal }) => {
  const identify = useIdentityContext();
  const isLoggedIn = identify && identify.isLoggedIn;

  const name =
    identify &&
    identify.user &&
    identify.user.user_metadata &&
    identify.user.user_metadata.full_name;

  return (
    isLoggedIn && (
      <div className="dashboard-header">
        <nav>
          <Link to="dashboard/secret" activeClassName="active">
            Secret Stuff
          </Link>
          <Link to="dashboard/base" activeClassName="active">
            See Your Base
          </Link>
        </nav>
        <span>
          Logged in as {name}
          <button onClick={showModal}>Log out</button>
        </span>
      </div>
    )
  );
};

export default Profile;
