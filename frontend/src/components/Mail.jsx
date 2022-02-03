import React from 'react'

const Mail = ({mailObj}) => {

  return (
    <div className="mail-data">
      <div className="mail-left">
        <p><strong>Ref #:</strong> <span>{mailObj.reference}</span></p>
        <p><strong>From:</strong><br/><span>{mailObj.from}</span></p>
        <p><strong>To:</strong><br/><span>{mailObj.to}</span></p>
      </div>
      <div className="mail-right">
        <p><strong>Message:</strong><br/><span>{mailObj.message}</span></p>
      </div>
    </div>
  )
}

export default Mail
