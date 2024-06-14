import React, { useState } from 'react';
import './Avg.css';

const generatePrimeNumbers = (l) => {
  const p = [];
  for (let num = 2; num <= l; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      p.push(num);
    }
  }
  return p;
};

const generateFibonacciNumbers = (l) => {
  const f = [0, 1];
  for (let i = 2; i < l; i++) {
    f.push(f[i - 1] + f[i - 2]);
  }
  return f.slice(0, l);
};

const generateEvenNumbers = (l) => {
  const e = [];
  for (let i = 0; i <= l; i += 2) {
    e.push(i);
  }
  return e;
};


const calculateAverage = (nums) => {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  return nums.length ? sum / nums.length : 0;
};

const App = () => {
  const [type, setType] = useState('prime');
  const [limit, setLimit] = useState(10);
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(null);

  const generateNumbers = () => {
    let nums = [];
    switch (type) {
      case 'prime':
        nums = generatePrimeNumbers(limit);
        break;
      case 'fibonacci':
        nums = generateFibonacciNumbers(limit);
        break;
      case 'even':
        nums = generateEvenNumbers(limit);
        break;
      
      default:
        break;
    }
    setNumbers(nums);
    setAverage(calculateAverage(nums));
  };

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <div className="controls">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="prime">Prime Numbers</option>
          <option value="fibonacci">Fibonacci Numbers</option>
          <option value="even">Even Numbers</option>

        </select>
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          placeholder="Limit/Count"
        />
        
        <button onClick={generateNumbers}>Calculate Average</button>
      </div>
      {numbers.length > 0 && (
        <div>
          <h2>Numbers: {numbers.join(', ')}</h2>
          <h2>Average: {average}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
