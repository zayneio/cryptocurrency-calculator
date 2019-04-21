import React, { Component } from 'react'

const SearchResult = (props) => {
  return(
    <li data-id={props.currency.id} onClick={props.handleSelect} className="currency-list-item">
      <a href="#" className="currency">
        <span>{props.currency.name}</span>
        <span className="currency_symbol">{props.currency.currency_symbol}</span>
      </a>
    </li>
  )
}

export default SearchResult
