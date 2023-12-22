import React from 'react';

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return <h1>{valueA} + {valueB} = {sum}</h1>;
}

export default function App() {
  return (
    <div className="App">
      <Sum valueA={5} valueB={3} />
    </div>
  );
}