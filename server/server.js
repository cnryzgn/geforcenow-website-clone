const app = require('express')()
const cors = require('cors')
const axios = require('axios')

const PORT = 8000

app.use(cors())

app.get('/api/games', (req, res) => {
    axios
      .get('https://www.freetogame.com/api/games')
      .then(result => result.data)
      .then(data => res.json(data))
      .catch(err => console.error(err))
})

app.listen(PORT, () => console.log(`Server running on : http://localhost:${PORT}`))