import React from "react";
import Header from "../components/Header";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import Cart from "../components/Cart";

const Home = () => {

    const navigate = useNavigate();

  
  return (
    <>
      <Header />
    <div>
      <div style={{ textAlign: "center", height: "100vh", padding: "80px 32px" }}>
        <h2 style={{ fontSize: "60px",  margin: "auto", lineHeight: "75px" }}>
          Master Your Money with{" "}
          <span style={{ color: "#5980A6" }}>FinanceFlow</span>
        </h2>
        <p style={{ width: "767.988px", margin: "auto", paddingTop: "2px", lineHeight: "32.5px" }}>
          Take control of your financial future with our intelligent expense
          tracking, smart budgeting tools, and powerful insights that help you
          make better money decisions.
        </p>
        <Button variant="contained" onClick={() => navigate('/login')}
          sx={{
            backgroundColor: "#5980A6",
            boxSizing: "border-box",
            // fontSize: "16px",
            borderRadius: "6px",
            fontWeight: 500,
            border: "0px solid rgb(224, 231, 235);",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            textAlign: "center",
            lineHeight: "28px",
            color: "rgb(255, 255, 255)",
            padding: " 8px 24px",
            display: "inline-flex",
            gap: "8px",
            marginTop: 3
        }}
        >
          Start Your Journey
        </Button>
        <Cart />
      </div>
    </div>
    </>
  );
};

export default Home;
