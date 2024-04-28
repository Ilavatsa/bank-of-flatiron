import React,{useState,useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


function AccountContainer() {
  const [ transactions,  setTransactions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);

  function handleFormSubmission(newtransactioninput){
        console.log(newtransactioninput)
        const configurationData =  {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newtransactioninput),
        }
        fetch("http://localhost:8001/transactions",configurationData)
         .then((response)=>response.json())
           .then(newItemTRansacted=>setTransactions(transactions=>[...transactions,newItemTRansacted]))
             .catch((error)=>{console.log(error)})
  }

  function handleSearch(search){
       console.log(search)
       const filterSEarch = transactions.filter((transaction)=>{return transaction.description.toLowerCase().includes(search.toLowerCase()) })
       
       setTransactions(filterSEarch)
       console.log(transactions)
  }
  function deleteTrans(transactionid){
  
    const  itemToBeRemoved =  transactions[transactionid]
    
    const  dataToDelete =  {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      } 
    }
    const filterTransactions = transactions.filter(
			(singletransaction) => singletransaction !== itemToBeRemoved
		);
    


    fetch(`http://localhost:8001/transactions/${transactionid}`,dataToDelete)
      .then(()=>setTransactions(filterTransactions))
         
      
  }
  

  return (
    <div>
      <Search onUserSearch={handleSearch}/>
      <AddTransactionForm onSubmission={handleFormSubmission}/>
      <TransactionsList  handleDelete={deleteTrans} transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;