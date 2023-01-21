import React from 'react';


const SearchBar = ({searchQuery, setSearchQuery}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  const handleSearchChange = (e) => {
    const filteredTools = searchQuery.filter(tool => tool.name.toLowerCase().includes(e.target.value.toLowerCase()) || tool.description.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchQuery(filteredTools);
  };
  return (
    <div className="relative rounded-md shadow-sm">
      <form className="flex items-center w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input py-2 pl-10 md:w-full lg:w-2/4 my-4 mx-auto border bg-black border-solid border-pink-500 block leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:outline-none focus:shadow-outline-blue focus:border-pink-300 placeholder-gray-500 text-gray-200 rounded-md"
          placeholder="&#128269; Search your needs"
          onChange={handleSearchChange}      
        />
      </form>
    </div>
  );
}

export default SearchBar;
