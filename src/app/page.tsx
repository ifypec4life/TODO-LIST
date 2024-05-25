"use client"
import React, { useState } from 'react';

const initialWorkers = [
  { id: 1, name: "Alice Johnson", salary: 50000 },
  { id: 2, name: "Bob Smith", salary: 55000 },
  { id: 3, name: "Charlie Davis", salary: 60000 },
  { id: 4, name: "Dana Lee", salary: 62000 },
  { id: 5, name: "Eve Brown", salary: 58000 },
  { id: 6, name: "Frank Harris", salary: 53000 },
  { id: 7, name: "Grace Wilson", salary: 54000 },
  { id: 8, name: "Hank Thompson", salary: 52000 },
  { id: 9, name: "Ivy Martinez", salary: 57000 },
  { id: 10, name: "Jack White", salary: 61000 },
  { id: 11, name: "Karen Black", salary: 59000 },
  { id: 12, name: "Leo Green", salary: 56000 },
  { id: 13, name: "Mona Hall", salary: 60000 },
  { id: 14, name: "Nina King", salary: 63000 },
  { id: 15, name: "Oscar Scott", salary: 61000 },
  { id: 16, name: "Paul Young", salary: 62000 },
  { id: 17, name: "Quinn Adams", salary: 64000 },
  { id: 18, name: "Rachel Carter", salary: 65000 },
  { id: 19, name: "Sam Evans", salary: 67000 },
  { id: 20, name: "Tina Baker", salary: 66000 }
];

function App() {
  const [workers, setWorkers] = useState(initialWorkers);

  const increaseSalary = (id: number) => {
    setWorkers(workers.map(worker =>
      worker.id === id ? { ...worker, salary: worker.salary + 100 } : worker
    ));
  };

  const decreaseSalary = (id: number) => {
    setWorkers(workers.map(worker =>
      worker.id === id ? { ...worker, salary: worker.salary - 100 } : worker
    ));
  };

  const removeWorker = (id: number) => {
    setWorkers(workers.filter(worker => worker.id !== id));
  };

  return (
    <div>
      {workers.map(worker => (
        <div key={worker.id}>
          <h2>{worker.name}</h2>
          <p>Salary: ${worker.salary}</p>
          <button onClick={() => increaseSalary(worker.id)}>Increase Salary</button>
          <button onClick={() => decreaseSalary(worker.id)}>Decrease Salary</button>
          <button onClick={() => removeWorker(worker.id)}>Remove Worker</button>
        </div>
      ))}
    </div>
  );
}

export default App;
