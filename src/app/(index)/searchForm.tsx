const SearchForm: React.FC = () => {
  return (
    <div className="my-8 w-full flex">
      <span className="px-2 flex items-center border-2 border-r-0 border-gray-600 rounded-tl-lg rounded-bl-lg text-gray-400">
        <span className="material-symbols--search-rounded"></span>
      </span>
      <input
        type="text"
        placeholder="Mau Top up apa?"
        className="rounded-tr-lg w-full rounded-br-lg p-2 bg-transparent border-gray-600 border-2 focus:outline-none focus:border-sky-600"
      />
    </div>
  );
};

export default SearchForm;
