import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
    <img
      src="medicinelogo.jpg"
    />
      <h1>Welcome to Your Medical Portfolio</h1>
      <Button as={Link} to={"/Home"}>See Home</Button>
    </div>
  );
}

export default LoginPage;


// intro page to log in to account
// not sure if log in button to go to home page works