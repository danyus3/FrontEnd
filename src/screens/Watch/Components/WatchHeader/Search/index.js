import React from 'react'
import { connectWithRedux } from '_redux/watch'
import { 
  searchControl, 
  SEARCH_INIT
} from '../../../Utils'
import './index.css'

function Search({
  search=SEARCH_INIT
}) {

  const handleOpenSearch = () => {
    searchControl.openSearch()
  }

  return (
    <button
      className="plain-btn watch-header-search-btn"
      aria-label="Search"
      aria-controls="watch-search-container"
      onClick={handleOpenSearch}
    >
      <span className="header-search-btn-content" tabIndex="-1">
        <i aria-hidden="true" className="material-icons">search</i> Search
      </span>
    </button>
  )
}

export default connectWithRedux(
  Search,
  ['search'],
  []
)