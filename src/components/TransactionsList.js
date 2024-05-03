import React from "react";
import Transaction from "./Transaction";


function TransactionsList({ transactions, handleDelete }) {
  // Handle the case where transactions might be null or undefined
  if (!transactions) {
    return <p>No transactions available.</p>;
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Remove</h3>
          </th>
        </tr>
        {transactions.map((singleTransaction) => (
          <Transaction
            key={singleTransaction.id}
            date={singleTransaction.date}
            description={singleTransaction.description}
            category={singleTransaction.category}
            amount={singleTransaction.amount}
            id={singleTransaction.id}
            onDelete={() => handleDelete(singleTransaction.id)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
