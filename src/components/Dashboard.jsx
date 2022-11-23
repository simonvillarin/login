import React from "react";
import Navbar from "./Navbar";
import { LoginContext } from "../App";

function Dashboard({ username }) {
  return (
    <>
      <Navbar username={username} />
    </>
  );
}

export default Dashboard;
