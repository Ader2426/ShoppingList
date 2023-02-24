import React, { useState } from 'react';
import Form from './components/Form';
import ShoppingList from './components/ShoppingList';

const App = () => {
  const [input, setInput] = useState('');
  const [grocery, setGrocery] = useState([]);
  return (
    <div className="py-10 max-w-7xl flex justify-center ">
      <main className="border-2  bg-cyan-100 w-2/4 ">
        <Form
          input={input}
          setInput={setInput}
          grocery={grocery}
          setGrocery={setGrocery}
        />
        <div>
          <ShoppingList grocery={grocery} setGrocery={setGrocery} />
        </div>
      </main>
    </div>
  );
};

export default App;
