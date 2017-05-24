let express = require('express')
let expressGraphQL = require('express-graphql')
let schema = require('./schema/schema')

let app = express()

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
  })
)

const PORT = 4000
app.listen(PORT, () => {
})
