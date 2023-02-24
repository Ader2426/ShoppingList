import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, grocery, setGrocery }) => {
  const [isBarLength, setIsBarLength] = useState(false);

  useEffect(() => {
    input.length < 1 ? setIsBarLength(false) : setIsBarLength(true);
    input.length > 2 ? setIsBarLength(false) : '';
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const itemExists = grocery.some((groce) => groce.title === input);
    if (itemExists) {
      return;
    }
    setGrocery([...grocery, { id: uuidv4(), title: input }]);

    setInput('');
  };

  return (
    <form className="" onSubmit={onFormSubmit}>
      <p className="text-xl p-4">Produit à ajouter à la liste de course:</p>
      <input
        type="text"
        className="w-2/5 rounded-md m-8 "
        value={input}
        onChange={handleChange}
      />

      <button className="p-2 bg-fuchsia-900 text-white w-20 rounded-md  " type="submit">
        Ajouter
      </button>
      <div className="p-2">
        {isBarLength && (
          <p className="text-red-500 pt-2 text-sm">
            Le produit doit faire au minimum 3 càractére
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
