import React from "react";
import './App.css';
import Appc from "./data";
import Appa from "./fetch";
import TodoApp from "./todo";



function App() {
  return (
    <div className="App">
      
<p>To do App</p>
<container className="Todoapp">

<TodoApp />
</container>
<p> Counter </p>
<container className="count">
<Appc />
</container>

<p> Fetching data from API using Jsonplaceholder</p>
<container className="data">
<Appa />
</container>




      
    </div>
  );
}

export default App;
