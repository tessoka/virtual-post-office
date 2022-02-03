import React from 'react'
import { useState } from 'react'
import MailsAll from './components/MailsAll.jsx'
import MailNew from './components/MailNew.jsx'
import MailFind from './components/MailFind.jsx'
import Home from './components/Home.jsx'


function App() {

  const [ activeSearchBar, setActiveSearchBar ] = useState(false)
  const [ showAllMails, setShowAllMails ] = useState(false)
  const [ showNewMail, setShowNewMail ] = useState(false)
  const [ showFoundMail, setShowFoundMail ] = useState(false)
  const [ inputRef, setInputRef ] = useState("")


  const handleClickListMails = () => {
    setShowNewMail(false)
    setShowFoundMail(false)
    setShowAllMails(!showAllMails)
  }

  const handleClickNewMail = () => {
    setShowAllMails(false)
    setShowFoundMail(false)
    setShowNewMail(!showNewMail)
  }

  const handleFind = (e, inputRef) => {
    e.preventDefault()
    setShowAllMails(false)
    setShowNewMail(false)
    if (inputRef) {
      setShowFoundMail(true)
    }
  }

  return (
    <div className="App">

      <nav>
        <div className="header-container">
          <h1>POST OFFICE MAILS</h1>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={() => handleClickListMails()}>List mails</button>
          <button className="btn" onClick={() => handleClickNewMail()}>New mail</button>
          <button className="btn" onClick={() => {setActiveSearchBar(!activeSearchBar)}}>Search</button>
        </div>
      </nav>

      <div className={activeSearchBar ? "search-bar mt" : "search-bar"}>
        <form onSubmit={(e) => handleFind(e, inputRef)}>
          <input type="text" placeholder="Ref number" value={inputRef} onChange={(e) => setInputRef(e.target.value)} />
          <button type="submit "className="btn">Find</button>
        </form>
      </div>

      <main>
        { !showAllMails && !showNewMail && !showFoundMail && <Home /> }
        { showAllMails && <MailsAll /> }
        { showNewMail && <MailNew /> }
        { showFoundMail && <MailFind inputRefNum={inputRef} /> }
      </main>

    </div>
  );
}

export default App;
