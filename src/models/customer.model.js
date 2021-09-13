let mongoose = require('mongoose')

const server = 'cluster0.qhepb.mongodb.net/test-api?retryWrites=true&w=majority'
const user = 'justincarter'
const password = 'BbkCO29dDvMd25jH'

mongoose.connect(`mongodb+srv://${user}:${password}@${server}`, { useNewUrlParser: true, useUnifiedTopology: true })

//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

//MONGO_URI="mongodb+srv://justincarter:BbkCO29dDvMd25jH@cluster0.qhepb.mongodb.net/test-api?retryWrites=true&w=majority"


let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Customer', CustomerSchema)
