import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions,handleDelete }) {
  
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
        {
          transactions.map((singletransaction)=>{
            return <Transaction date={singletransaction.date}  description={singletransaction.description} amount={singletransaction.amount} category={singletransaction.category} id={singletransaction.id} key={singletransaction.id}  onDeleteKey={handleDelete}></Transaction>
          })
        }
        
      </tbody>
    </table>
  );
}

export default TransactionsList;