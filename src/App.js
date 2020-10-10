import React from 'react';
import './App.css';
import SocialCards from './components/SocialCards';

var arr = [4, 5, 7, 8, 14, 45, 76];
var filteredOdd = arr.filter(function (element, index, array) {
  return index % 2 === 0;
});

var filteredEven = arr.filter(function (element, index, array) {
  return index % 2 === 1;
});

console.log(filteredOdd);
console.log(filteredEven);

function App() {
  return (
    <div className="App">
      <SocialCards />
    </div>
  );
}

export default App;
