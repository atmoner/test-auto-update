const express = require('express')
const AutoGitUpdate = require('auto-git-update')
const updater = new AutoGitUpdate(config);
const app = express()
const port = 3000

const config = {
    repository: 'https://github.com/atmoner/test-auto-update',
    fromReleases: false,
    tempLocation: '~/Bureau/test-auto-update3/'
}

app.get('/', (req, res) => {
  var returnData = updater.compareVersions()
  res.send('Hello atmon3r updated-3! <a href="./update">update</a><br />'+returnData)

})

app.get('/update', (req, res) => {
  
  updater.autoUpdate();
  res.send('update')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 






