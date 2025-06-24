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
      <div style={{ backgroundColor: "#F6FBFF" }}>
        <div
          style={{ textAlign: "center", height: "100vh", padding: "80px 32px" }}
        >
          <h2 style={{ fontSize: "60px", margin: "auto", lineHeight: "75px" }}>
            Master Your Money with{" "}
            <span style={{ color: "#5980A6" }}>FinanceFlow</span>
          </h2>
          <p
            style={{
              width: "767.988px",
              margin: "auto",
              paddingTop: "2px",
              lineHeight: "32.5px",
            }}
          >
            Take control of your financial future with our intelligent expense
            tracking, smart budgeting tools, and powerful insights that help you
            make better money decisions.
          </p>
          <Button
            variant="contained"
            onClick={() => navigate("/login")}
            sx={{
              background:
                "rgb(89, 128, 166) linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235));",
              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;",
              boxSizing: "border-box",
              // fontSize: "16px",
              borderRadius: "6px",
              fontWeight: 500,
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              textAlign: "center",
              lineHeight: "28px",
              color: "rgb(255, 255, 255)",
              padding: " 14px 28px",
              gap: "8px",
              marginTop: 4,
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            Add New Transaction
          </Button>
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Home;
