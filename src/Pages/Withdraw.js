import React, { useState } from "react";
import CardList from "../Component/BankCard/CardList";
import AddBankPopup from "../Component/Modal/AddBankPopup";
import WithdrawalTransactionTable from "../Component/Table/WithdrawalTransactionTable";

function Withdraw() {
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
      <div className="section_title border_bottom">
        <div className="text_area">
          <h1>Withdraw Your Amount</h1>
          <p>Cashing out your balance</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4">
          <div className="card withdraw_card">
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
        <div className="col-lg-4">
          <div className="card bank_add_card">
            <h2>How you get paid</h2>
            <CardList />
            <AddBankPopup/>
          </div>
        </div>
      </div>
      <div className="table_content">
        <h1 className="mb-5">Recent Transactions</h1>
        <WithdrawalTransactionTable/>
      </div>
    </div>
  );
}

export default Withdraw;
