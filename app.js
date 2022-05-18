const express = require('express')
const AutoGitUpdate = require('auto-git-update')
const app = express()
const port = 3000

const config = {
    repository: 'https://github.com/atmoner/test-auto-update',
    fromReleases: false,
    tempLocation: './tmp/'
}

app.get('/', (req, res) => {
  res.send('Hello atmon3r updated! <a href="./update">update</a>')
})

app.get('/update', (req, res) => {
  const updater = new AutoGitUpdate(config);
  updater.autoUpdate();
  res.send('update')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 






