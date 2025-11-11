import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Counter from "./components/Counter";
import CardList from "./components/CardList.jsx";
import "./App.css";
import data from "./data/data.js";

function App() {
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState(data);

  const handleClick = () => {
    setEmployees((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: "John Doe",
        title: "Software Engineer",
        age: 30,
        animal: "hamster",
      },
    ]);
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <CardList employees={employees} />
        <button onClick={handleClick}>Add Employee</button>
        <Counter count={count} setCount={setCount} />
      </main>
      <Footer count={count} setCount={setCount} />
    </div>
  );
}

export default App;
