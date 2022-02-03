import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const MailNew = () => {

  const [ mailRefNum, setMailRefNum ] = useState("")
  const [ mailFrom, setMailFrom ] = useState("")
  const [ mailTo, setMailTo ] = useState("")
  const [ mailMessage, setMailMessage ] = useState("")

  const [ isPending, setIsPending ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMail = {
      from: mailFrom,
      to: mailTo,
      message: mailMessage,
      reference: parseInt(mailRefNum)
    }

    setIsPending(true)

    axios.post('http://localhost:5000/api/mails', newMail)
      .then((res) => {
        console.log(res)
        // console.log("new mail added")
        setIsPending(false)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  return (
    <div className="form-container">
      <h2>Add a New Mail</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-top">
          <div className="form-left">
            <input type="text" placeholder="REFERENCE #" required value={mailRefNum} onChange={(e) => {setMailRefNum(e.target.value)}}/>
            <input type="text" placeholder="FROM" required value={mailFrom} onChange={(e) => {setMailFrom(e.target.value)}} />
            <input type="text" placeholder="TO" required value={mailTo} onChange={(e) => {setMailTo(e.target.value)}} />
          </div>
          <div className="form-right">
            <textarea placeholder="MESSAGE" required value={mailMessage} onChange={(e) => {setMailMessage(e.target.value)}} />
          </div>
        </div>
        <div className="form-bot">
          { !isPending && <button type="submit" className="btn">Add Mail</button> }
          { isPending && <button disabled className="btn">Adding Mail...</button> }
        </div>
      </form>
    </div>
  )
}

export default MailNew
