import React,{useState} from "react";

function AddTransactionForm({onSubmission}) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category:"",
    amount:null
  });
  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event){
    event.preventDefault()
    onSubmission(formData)
    
     
  }
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} onChange={handleChange} className="ui form">
        <div className="inline fields">
          <input onChange={handleChange} type="date" name="date" />
          <input onChange={handleChange} type="text" name="description" placeholder="Description" />
          <input onChange={handleChange}type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm; 