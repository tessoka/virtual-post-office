import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Mail from './Mail'

const MailsAll = () => {
  const url = 'http://localhost:4999/api/mails'
  const [ mailsData, setMailsData ] = useState([])

  const getMails = async (url) => {
    const mails = await axios.get(url)
    setMailsData(mails.data)
  }

  useEffect(() => {
    getMails(url)
  }, [])

  return (
    <div className="mails-container">
      {mailsData.map(mail => <Mail key={mail.id} mailObj={mail}/>)}
    </div>
  )
}

export default MailsAll
