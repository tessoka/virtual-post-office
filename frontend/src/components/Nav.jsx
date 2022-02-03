import React from 'react'
import { useState } from 'react'


const Nav = ({handleClickListMails}) => {

  const [ activeSearchBar, setActiveSearchBar ] = useState(false)

  return (
    <>
      <nav>
        <div className="header-container">
          <h1>POST OFFICE MAILS</h1>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={() => handleClickListMails()}>List mails</button>
          <button className="btn">New mail</button>
          <button className="btn" onClick={() => {setActiveSearchBar(!activeSearchBar)}}>Search</button>
        </div>
      </nav>

      <div className={activeSearchBar ? "search-bar mt" : "search-bar"}>
        <input type="text" placeholder="Ref number"/>
        <button className="btn">Find</button>
      </div>
    </>
  )
}

export default Nav
