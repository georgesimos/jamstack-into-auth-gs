import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>This app Rules!</h1>
    <p> Log in to find why...</p>
    <Link to="/dashboard">Go to dashboard</Link>
  </Layout>
);
