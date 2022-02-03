const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')

app.use(cors())
app.use(express.json())

const loadData = (req, res, next) => {
  const dataMails = JSON.parse(fs.readFileSync('./data/mails.json'))
  res.locals.dataMails = dataMails
  next()
}

app.use(loadData)


app.get('/api/mails', (req, res) => {
  const dataMails = res.locals.dataMails
  res.json(dataMails)
})

app.get('/api/mails/:reference', (req, res) => {
  const dataMails = res.locals.dataMails
  res.json(dataMails.find(mail => mail.reference === parseInt(req.params.reference)))
})

app.post('/api/mails', (req, res) => {
  const dataMails = res.locals.dataMails

  let id
  try { id = dataMails.reduce((a, b) => (a.id > b.id ? a : b)).id + 1 }
  catch { id = 1 }

  let existCheck = false
  dataMails.map(mail => {
    if (mail.reference === parseInt(req.body.reference)) {
      return existCheck = true
    }
  })

  if (existCheck) {
    res.status(400).json({msg: "Reference number already exist..."})
  } else {
    dataMails.push({id, ...req.body})
    fs.writeFileSync('./data/mails.json', JSON.stringify(dataMails, null, 2))
    res.json({msg: "Mail is now stored...", id, ...req.body})
  }
})


app.listen(5000)