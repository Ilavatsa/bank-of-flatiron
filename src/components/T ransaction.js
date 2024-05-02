import React  from "react";

function Transaction({date,description,category,amount,id,onDeleteKey}) {
  
  function deleteTransaction(event){
    
    onDeleteKey(event.target.id)
  
  }
  return (
    <tr key={id}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button id={id} onClick={deleteTransaction}>Delete</button></td>
  </tr>
  );
}

export default Transaction;