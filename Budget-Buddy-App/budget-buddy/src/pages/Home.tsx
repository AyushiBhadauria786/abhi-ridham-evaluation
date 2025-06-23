import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
       <div style={{ height: '200vh', padding: '32px' }}>
        <h1>Master Your Money with FinanceFlow</h1>
        <p>
          Take control of your financial future with our intelligent expense
          tracking, smart budgeting tools, and powerful insights that help you
          make better money decisions.
        </p>
        <button>Start Your Journey</button>
      </div>
    </>
  );
};

export default Home;
