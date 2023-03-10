const ShoppingList = ({ grocery, setGrocery }) => {
  const handleDelete = ({ id }) => {
    setGrocery(grocery.filter((groce) => groce.id !== id));
  };

  return (
    <div className="p-6 ">
      {grocery.map((groce) => (
        <li
          className="list-none ml-2 flex  justify-between rounded-md bg-red-200 m-2 p-2  "
          key={groce.id}>
          <div className="in flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 mt-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <input
              type="text"
              value={groce.title}
              className="border-none w-3/4 rounded-md bg-red-200  text-xl"
              onChange={(e) => e.preventDefault()}
              disabled
            />
          </div>

          <button
            type="button"
            className="btn-delete"
            onClick={() => handleDelete(groce)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8  ">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
              />
            </svg>
          </button>
        </li>
      ))}
    </div>
  );
};

export default ShoppingList;
