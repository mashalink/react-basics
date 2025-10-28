import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Counter from "./components/Counter";
import Card from "./components/Card";
import "./App.css";
import data from "./data.js";

function App() {
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState(data);

  const handleClick = () => {
    setEmployees((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(), // или свой генератор
        name: "John Doe",
        title: "Software Engineer",
        age: 30,
      },
    ]);
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <div className="card-container">
          {employees.map((employee) => (
            <Card
              key={employee.id} // теперь безопасно
              name={employee.name}
              title={employee.title}
              age={employee.age}
            />
          ))}
        </div>
        <button onClick={handleClick}>Add Employee</button>
        <Counter count={count} setCount={setCount} />
      </main>
      <Footer count={count} setCount={setCount} />
    </div>
  );
}

export default App;
