import React from 'react'
import SearchResult from './SearchResult'

const Search = (props) => {
  const results = props.searchResults.map( curr => {
    return (
      <SearchResult 
        key={curr.id} 
        currency={curr} 
        handleSelect={props.handleSelect.bind(null, curr)} 
      />
    )
  })

  return(
    <div>
      <h1>Cryptocurrency Portfolio Calculator</h1>
      <form>
        <div className="form-group">
          <label>Search for a Currency:</label><br/>
          <input onChange={props.handleChange} autoComplete="off" type="text" name="name" placeholder="Ex: Bitcoin, Litecoin, Ethereum..." value={props.name} className="field"/>
        </div>
        <div className="currency-list">
          {results}
        </div>
      </form>
    </div>
  )
}

export default Search
