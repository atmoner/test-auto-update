const express = require('express')
const AutoGitUpdate = require('auto-git-update')
const fs = require('fs')
const app = express()
const port = 3000
const homedir = require('os').homedir()
let jsonData = require('./cosmos.config.json');

const config = {
    repository: 'https://github.com/atmoner/test-auto-update',
    fromReleases: false,
    tempLocation: homedir + '/Bureau/test-auto-update3/',
    branch: 'main'
}
const updater = new AutoGitUpdate(config);

app.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(jsonData)
  // res.send('Hello atmon3r '+returnData.remoteVersion+'! <a href="./update">update</a><br />Curent version: '+returnData.currentVersion+'<br />Remote version: '+returnData.remoteVersion)
})

app.get('/update', (req, res) => {  
  updater.autoUpdate();
  res.send('update')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
