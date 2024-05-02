import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions data when component mounts
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  // Function to handle form submission and add a new transaction
  function handleFormSubmission(newTransaction) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    };

    fetch("http://localhost:8001/transactions", config)
      .then((response) => response.json())
      .then((newTransactionData) => {
        setTransactions((prevTransactions) => [
          ...prevTransactions,
          newTransactionData,
        ]);
      })
      .catch((error) => console.error("Error adding transaction:", error));
  }

  // Function to handle search and filter transactions
  function handleSearch(searchQuery) {
    const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setTransactions(filteredTransactions);
  }

  // Function to handle deletion of a transaction
  function deleteTransaction(transactionId) {
    fetch(`http://localhost:8001/transactions/${transactionId}`, {
      method: "DELETE",
    })
      .then(() => {
        setTransactions((prevTransactions) =>
          prevTransactions.filter(
            (transaction) => transaction.id !== transactionId
          )
        );
      })
      .catch((error) => console.error("Error deleting transaction:", error));
  }

  // Render child components with appropriate props
  return (
    <div>
      <Search onUserSearch={handleSearch} />
      <AddTransactionForm onSubmission={handleFormSubmission} />
      <TransactionsList handleDelete={deleteTransaction} transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
