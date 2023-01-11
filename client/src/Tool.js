import './App.css'; 

const Tool = ({ tool }) => {
  return (
    // add tailwindcss classes to the divs
    
      <div className="card">
        <img src={tool.imgURL} alt={tool.name} width={200}/>
        <div className="card-body">
          <h3>{tool.name}</h3>
          <div className='Categ'>
            {tool.category}
          </div>
          <p className='text-center'>{tool.description}</p>
          <a href={tool.siteURL} target="_blank" rel="noreferrer">Link to Tool</a>
        </div>
      </div>

  )
}
export default Tool