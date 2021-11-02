const express = require('express')
//const { getHouses, createHouses, updateHouses, deleteHouses } = require('./controller.js')
const cors = express('cors')

const app = express()

app.use(express.json())
app.use(cors())

//let ctrl = require('./controller.js')
let ctrl = { getHouses, createHouses, updateHouses, deleteHouses } = require('./controller.js')
//const ctrl = {getHouses, createHouses, updateHouses, deleteHouses} = require('./controller.js')

app.get(`/api/houses`, getHouses)   
app.post(`/api/houses`, createHouses) // .post to create 
app.put(`/api/houses/:id`, updateHouses)    // .put to update
app.delete(`/api/houses/:id`, deleteHouses)




app.listen(4040, () => console.log(`Server running on 4040`))