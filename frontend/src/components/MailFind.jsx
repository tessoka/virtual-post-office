import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Mail from './Mail'

const MailFind = ({inputRefNum}) => {
  const url = `http://localhost:4999/api/mails/${inputRefNum}`
  const [ mailsData, setMailsData ] = useState([])

  const getMails = async (url) => {
    const mails = await axios.get(url)
    setMailsData(mails.data)
  }

  useEffect(() => {
    getMails(url)
  }, [url])

  return (
    <div className="mails-container">
      <Mail mailObj={mailsData}/>
    </div>
  )
}

export default MailFind
