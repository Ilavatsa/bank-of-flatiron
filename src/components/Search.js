import React,{useState} from "react";

function Search({onUserSearch}) {
   const [search,setsearch] = useState(" ")
   function handleChange(event){
    setsearch(event.target.value)
     onUserSearch(search)
   }
  return (
    <div className="ui large fluid icon input">
      <input 
       onChange={handleChange} 
        type="text"
        placeholder="Search your Recent Transactions"
         
      />
      <i onClick={handleChange} className="circular search link icon"></i>
    </div>
  );
}

export default Search;