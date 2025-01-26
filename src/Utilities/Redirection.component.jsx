// This code will redirect back to the main page after check out has been completed
// This will also reload the application so i do not have to reset the cart to be empty again

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Redirection.styles.css";

const RedirectHomeWithDelay = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Navigate to the home page
      window.location.reload(); // Reload the application
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="Redirection__container">
      <h1>Payment Confirmed</h1>
      <h2>Redirecting to Home...</h2>
      <p>You will be redirected to the home page in 5 seconds.</p>
    </div>
  );
};

export default RedirectHomeWithDelay;
