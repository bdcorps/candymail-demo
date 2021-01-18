require('dotenv').config()
const path = require('path')
const candymail = require('candymail')
const express = require('express')
const app = express()
const port = 3000

const automationPath = path.resolve('candymail.automation.json')
candymail.init(automationPath, {
  senderEmail: process.env.MAIL_USER,
  senderPassword: process.env.MAIL_PASSWORD,
  hostingURL: process.env.HOSTING_URL
})

candymail.start()

const someConditionSatisfiedByUser = () => {
  const user1 = 'gopode2677@vy89.com'
  candymail.runAutomation('automation1', user1)
}

someConditionSatisfiedByUser()

// app.get('/features', (req, res) => {
//   someConditionSatisfiedByUser()
//   res.send(candymail.getAllScheduledMessages())
// })

app.listen(port, () => {
  console.log(`Learn about our new features at http://localhost:${port}/features`)
})
