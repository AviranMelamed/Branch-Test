const express = require(`express`)
const app = express()

app.use(express.static(path.join(__dirname, `dist`)))
app.use(express.static(path.join(__dirname, `node_modules`)))

const port = 3000
app.listen(port, function(){
    console.log(`you gett logged to server number ${port}`)
})
