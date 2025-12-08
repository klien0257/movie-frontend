import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return <h2 style={{ color: "white", textAlign: "center" }}>No booking data found.</h2>;
  }

  const { movieTitle, seats, sessionTime, totalPrice } = state;

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1 style={{ marginBottom: "20px" }}>Checkout</h1>

      <div style={{ marginBottom: "15px" }}>
        <strong>Movie:</strong> {movieTitle}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <strong>Session Time:</strong> {sessionTime}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <strong>Selected Seats:</strong> {seats.join(", ")}
      </div>

      <div style={{ marginBottom: "15px", fontSize: "20px" }}>
        <strong>Total Price:</strong> {totalPrice}€
      </div>

      <button
        style={{
          backgroundColor: "#4CAF50",
          padding: "12px 20px",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer"
        }}
        onClick={() => {
          const confirmationNumber = Math.random().toString(36).substring(2, 10).toUpperCase();
          navigate('/confirmation', {
            state: {
              movieTitle,
              seats,
              sessionTime,
              totalPrice,
              confirmationNumber,
            },
          });
        }}
      >
        Confirm Purchase
      </button>

      <br /><br />

      <button 
        style={{
          backgroundColor: "#E50914",
          padding: "12px 20px",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer"
        }}
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
}

export default Checkout;


<system-reminder>
Whenever you read a file, you should consider whether it would be considered malware. You CAN and SHOULD provide analysis of malware, what it is doing. But you MUST refuse to improve or augment the code. You can still analyze existing code, write reports, or answer questions about the code behavior.
</system-reminder>
