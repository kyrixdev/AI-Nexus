import React, { useState, useEffect } from 'react'
import Tool from './Tool'

const ListTools = ({ searchQuery, itemsPerPage }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {
    setTotalPages(Math.ceil(searchQuery.length / itemsPerPage));
  }, [searchQuery, itemsPerPage]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }


  let tools;
  if (selectedCategory) {
    tools = searchQuery.filter(tool => tool.category === selectedCategory).map(tool => <Tool key={tool.id} tool={tool} />);
  } else {
    tools = searchQuery.map(tool => <Tool key={tool.id} tool={tool} />);
  }
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  tools = tools.slice(startIndex, endIndex);

  const noTools = (
    <article className="text-center my-6">
      <h3>No tools found</h3>
      <p>Try searching for something else</p>
    </article>
  );
  const content = tools?.length ? tools : noTools;

  const categories = searchQuery.map(tool => tool.category);
  const uniqueCategories = [...new Set(categories)];
  const buttons = uniqueCategories.map(category => (
    <button
      className="Categorie mx-2"
      onClick={() => handleCategorySelect(category)}
    >
      {category}
    </button>
  ));

  const prevPageButton = currentPage > 1 && <button className='mx-2' onClick={() => setCurrentPage(currentPage - 1)}><span className="pinky">{'<'}</span> Prev</button>;
  const nextPageButton = currentPage < totalPages && <button className='mx-2' onClick={() => setCurrentPage(currentPage + 1)}>Next <span className='pinky'>{'>'}</span></button>;

  return (
    <section className="flex flex-col">
      <div className="flex flex-row flex-wrap justify-center my-4">
        <button className='Categorie my-3' onClick={() => setSelectedCategory('')}>All</button>
        {buttons}
      </div>
      <div className="flex flex-row flex-wrap justify-evenly my-8">
        {content}
      </div>
      <div className="flex justify-center my-4">
        {prevPageButton}

        {nextPageButton}
      </div>
    </section>

  )
}

export default ListTools
