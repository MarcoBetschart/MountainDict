const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { PORT, mongoUri } = require('./config')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mountainnItemRoutes = require('./routes/api/MountainItems')
const userRoutes = require('./routes/api/Users')

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.use('/api/MountainItems', mountainnItemRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))