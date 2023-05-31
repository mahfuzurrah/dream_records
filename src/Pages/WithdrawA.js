import React, { useState } from "react";

function WithdrawA() {
  const [balance, setBalance] = useState(0);
  const isButtonActive = balance >= 100;

  const handleWithdraw = () => {
    if (balance >= 100) {
      // Withdraw logic here
      setBalance(0);
      alert("Withdrawn ₹100.00");
    } else {
      alert("Withdrawal not possible");
    }
  };

  return (
    <div className="withdraw_content">
      <div className="section_title">
        <div className="text_area">
          <h1>Withdraw Your Amount</h1>
          <p>Cashing out your balance</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <h2>Available Amount</h2>
            <h1>₹{balance.toFixed(2)}</h1>
            <div className="btn_area">
              <button
                className={`btn ${isButtonActive ? "active" : ""}`}
                onClick={handleWithdraw}
                disabled={!isButtonActive}
              >
                Withdraw Balance
              </button>
              <p>Minimum withdraw balance ₹100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithdrawA;
