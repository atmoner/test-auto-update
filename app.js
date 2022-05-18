const express = require('express')
const AutoGitUpdate = require('auto-git-update')
const app = express()
const port = 3000
const homedir = require('os').homedir();
console.log(homedir + '/Bureau/test-auto-update3/')

const config = {
    repository: 'https://github.com/atmoner/test-auto-update',
    fromReleases: false,
    tempLocation: homedir + '/Bureau/test-auto-update3/'
}
const updater = new AutoGitUpdate(config);

app.get('/', async (req, res) => {
  var returnData = await updater.compareVersions()
  console.log(returnData)
  res.send('Hello atmon3r updated-4! <a href="./update">update</a><br />Curent version: '+returnData.currentVersion+'<br />Remote version: '+returnData.remoteVersion)
})

app.get('/update', (req, res) => {  
  updater.autoUpdate();
  res.send('update')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
