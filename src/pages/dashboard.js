import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import IdentityModal from "react-netlify-identity-widget";
import { navigate } from "gatsby";
import Layout from "../components/layout";
import Profile from "../components/profile";
import RouteBase from "../components/route-base";
import RouteSecret from "../components/route-secret";
import RouteLogin from "../components/route-login";
import PrivateRoute from "../components/private-route";

import "react-netlify-identity-widget/styles.css";

const Dashboard = ({ location }) => {
  const [isVisible, setVisibility] = useState(false);
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("dashboard/login", { replace: true });
    }
  }, [location]);

  const showModal = () => setVisibility(true);

  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        <PrivateRoute component={RouteBase} path="/dashboard/base" />
        <PrivateRoute component={RouteSecret} path="/dashboard/secret" />
        <RouteLogin path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </Layout>
  );
};

export default Dashboard;
